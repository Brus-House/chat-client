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

app.listen(3001, () => {
    console.log("Your app is listening =]");
})