const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const verifyToken = require("../middleware/verifyToken");

const connection = mysql.createConnection({
    host: "192.168.99.100",
    user: "root",
    password: "2CjqvNH^%45W",
    database: "advicetracker",
});

router.get("/api/users", verifyToken, (req, res) => {
    const queryString = "SELECT * FROM users";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.post("/api/users/", verifyToken, (req, res) => {
    const newUser = req.body;

    // check if already user with same id
    const checkQueryString = "SELECT * FROM users WHERE userID = " + newUser.id + ";";
    connection.query(checkQueryString, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            if (results.length != 0) {
                console.log(`Already a user with userID: ${newUser.id}`);
                res.sendStatus(200);
            } else {
                const queryString = "INSERT INTO users (userID, username, email) VALUES (?, ?, ?)";

                connection.query(queryString, [newUser.id, newUser.username, newUser.email], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(`Successfully created user with ID ${newUser.id}`);
                        res.sendStatus(200);
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
