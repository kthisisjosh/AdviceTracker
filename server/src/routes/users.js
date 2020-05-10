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

router.get("/api/users/:username", verifyToken, (req, res) => {
    try {
        const queryStringInfo = "SELECT * FROM users WHERE username = '" + req.params.username.replace(/_/g, " ") + "';";

        connection.query(queryStringInfo, (err, userResults, fields) => {
            if (!err) {
                const queryStringPosts = "SELECT * FROM posts WHERE user_id = " + JSON.parse(JSON.stringify(userResults[0])).userID + ";";
                connection.query(queryStringPosts, (err, results, fields) => {
                    if (!err) res.json({ ...JSON.parse(JSON.stringify(userResults[0])), posts: JSON.parse(JSON.stringify(results)) });
                    else console.log(err);
                });
            } else {
                console.log(err);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

router.post("/api/users/", async (req, res) => {
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
                const queryString = "INSERT INTO users (userID, username, email, token, profileUrl) VALUES (?, ?, ?, ?, ?)";

                connection.query(queryString, [newUser.id, newUser.username, newUser.email, token, newUser.profileUrl], (err, results, fields) => {
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

module.exports = router;
