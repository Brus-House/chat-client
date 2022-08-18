const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'brushouse'
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        res.send("Token Needed!");
    } else {
        jwt.verify(token, "jwtSecert", (err, decoded) => {
            if (err) {
                res.json({auth: false, message: "Failed to authenticate"});
            } else {
                req.user.id = decoded.id;
                next();
            }
        })
    }
}

app.post('/registration/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    database.query("INSERT INTO chatclient (email, password) VALUES (?,?)", [email,password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/getUserInfo', verifyJWT,(req, res) => {
    res.send("You are Authenticated!");
})

app.post('/login/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    database.query("SELECT * FROM chatclient WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.send({err:err});
        } 
        if (result.length > 0) {
            const id = result[0].id
            const token = jwt.sign({id}, "jwtSecert", {expiresIn : 300});

            res.json({auth : true, token, result: result});
        } else {
            res.json({auth : false, message: "no user exists"});
        }
    });
});

app.listen(3001, () => {
    console.log("Your app is listening =]");
})