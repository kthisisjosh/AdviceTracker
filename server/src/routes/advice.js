const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

router.get("/api/advice/inbox/:id", (req, res) => {
    const queryString = "SELECT * FROM advice WHERE InInbox = " + req.params.id + ";";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.post("/api/advice/inbox/:id", (req, res) => {
    const newAdvice = req.body;

    const queryString = "INSERT INTO advice (AdviceID, UserID, InInbox, Content, Category, NumOfLikes, DatePosted) VALUES (?, ?, ?, ?, NULL, NULL, NULL)";

    connection.query(queryString, [newAdvice.adviceID, req.params.id, newAdvice.inInbox, newAdvice.content], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Successfully created advice with content ${newAdvice.content}`);
            res.sendStatus(200);
        }
    });
});

module.exports = router;
