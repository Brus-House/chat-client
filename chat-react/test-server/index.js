const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'brushouse'
});

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

app.post('/login/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    database.query("SELECT * FROM chatclient WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.send({err:err});
        } 
        if (result.length > 0) {
            //res.send(result);
            res.send({message : "0"});
        } else {
            res.send({message : "Invalid username or password"});
        }
    });
});

app.listen(3001, () => {
    console.log("Your app is listening =]");
})