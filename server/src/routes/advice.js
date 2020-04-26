const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const verifyToken = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

router.get("/api/advice/inbox/:id", verifyToken, (req, res) => {
    const queryString = "SELECT * FROM advice WHERE inInbox = 1 AND userID =" + req.params.id + ";";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.post("/api/advice/inbox/:id", verifyToken, (req, res) => {
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

router.delete("/api/advice/inbox/:id", verifyToken, (req, res) => {
    const queryString = "DELETE FROM advice WHERE adviceID = ?";

    connection.query(queryString, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Successfully deleted advice with ID ${req.params.id}`);
            res.sendStatus(200);
        }
    });
});

module.exports = router;