const express = require("express");
const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");
const router = new express.Router();

const verifyToken = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

router.get("/api/users/:username", (req, res) => {
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
                res.status(200).send({ user: results[0], token });
            } else {
                const categoryID = uuidv4();
                const firstSubCategoryID = uuidv4();
                const secondSubCategoryID = uuidv4();

                const inboxAdviceQueryString = "INSERT INTO advice (adviceID, userID, inInbox, content, categoryID, subcategoryID) VALUES (?, ?, ?, ?, NULL, NULL)";
                connection.query(
                    inboxAdviceQueryString,
                    [uuidv4(), newUser.id, 1, "<p>This is the inbox. This is where all the advice you haven't sorted out yet will go. Feel free to delete this!</p>"],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    }
                );
                const adviceQueryString = "INSERT INTO advice (adviceID, userID, inInbox, content, categoryID, subcategoryID) VALUES (?, ?, ?, ?, ?, ?)";
                connection.query(
                    adviceQueryString,
                    [
                        uuidv4(),
                        newUser.id,
                        0,
                        "<p>Each category is comprised of multiple sub-categories. These sub-categories can contain as much advice as you want. For example, this advice is in the '<strong>Sorting</strong>' sub-category in the '<strong>Advice Tracker</strong>' category!</p>",
                        categoryID,
                        firstSubCategoryID,
                    ],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    }
                );
                connection.query(
                    adviceQueryString,
                    [uuidv4(), newUser.id, 0, "<p>Advice that still needs to be sorted are put in the '<strong>Inbox</strong>' section.</p>", categoryID, firstSubCategoryID],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    }
                );
                connection.query(
                    adviceQueryString,
                    [uuidv4(), newUser.id, 0, "<p>Don't forget to see what other people can offer in the '<strong>Browse</strong>' tab in the Nav Bar!</p>", categoryID, secondSubCategoryID],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        }
                    }
                );
                const categoryQueryString = "INSERT INTO categories (name, categoryID, userID, description, isSubcategory, subcategoryID, color) VALUES (?, ?, ?, ?, ?, ?, ?)";
                connection.query(categoryQueryString, ["Advice Tracker", categoryID, newUser.id, "Tips on how to use Advice Tracker!", 0, null, null], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    }
                });
                connection.query(categoryQueryString, ["Sorting", categoryID, newUser.id, null, 1, firstSubCategoryID, "#AFF4E4"], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    }
                });
                connection.query(categoryQueryString, ["Finding Other Advice", categoryID, newUser.id, null, 1, secondSubCategoryID, "#AFF4E4"], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    }
                });

                const queryString = "INSERT INTO users (userID, username, email, token, profileUrl) VALUES (?, ?, ?, ?, ?)";

                connection.query(queryString, [newUser.id, newUser.username, newUser.email, token, newUser.profileUrl], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.status(200).send({ user: { userID: newUser.id, email: newUser.email, username: newUser.username, profileUrl: newUser.profileUrl, token: token }, token });
                    }
                });
            }
        }
    });
});

module.exports = router;
