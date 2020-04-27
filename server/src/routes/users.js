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

router.get("/api/users", verifyToken, (req, res) => {
    const queryString = "SELECT * FROM users";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.post("/api/users/", (req, res) => {
    const newUser = req.body;

    // check if already user with same id
    const checkQueryString = "SELECT * FROM users WHERE userID = " + newUser.id + ";";
    connection.query(checkQueryString, (err, results, fields) => {
        const token = jwt.sign({ id: newUser.id }, "mySecret");

        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            if (results.length != 0) {
                console.log(`Already a user with userID: ${newUser.id}`);
                res.status(200).send({ user: results[0], token });
            } else {
                const queryString = "INSERT INTO users (userID, username, email, token) VALUES (?, ?, ?, ?)";

                connection.query(queryString, [newUser.id, newUser.username, newUser.email, token], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(`Successfully created user with ID ${newUser.id}`);
                        res.status(200).send({ user: newUser, token });
                    }
                });
            }
        }
    });
});

router.delete("/api/users/:id", verifyToken, (req, res) => {
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
