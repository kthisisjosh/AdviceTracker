const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const connection = mysql.createConnection({
    host: "192.168.99.100",
    user: "root",
    password: "p^pvCB9XSD2i",
    database: "advicetracker",
});

router.get("/api/mock", (req, res) => {
    const queryString = "SELECT * FROM users";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.post("/api/mock", (req, res) => {
    const newUser = req.body;

    const queryString = "INSERT INTO users (id, name, hobbies, age) VALUES (?, ?, ?, ?)";

    connection.query(queryString, [newUser.id, newUser.name, newUser.hobbies, newUser.age], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Successfully created user with ID ${req.params.id}`);
            res.sendStatus(200);
        }
    });
});

router.delete("/api/mock/:id", (req, res) => {
    const queryString = "DELETE FROM users WHERE id = ?";

    connection.query(queryString, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Successfully deleted user with ID ${req.params.id}`);

            res.sendStatus(200);
        }
    });
});

module.exports = router;