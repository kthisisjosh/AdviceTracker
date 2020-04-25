const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const inbox = [
    {
        content: "<p>Lorem ipsum from server.</p>",
        category: "",
        userID: "",
        likes: null,
        datePosted: null,
        comments: [],
        id: "",
    },
    {
        content: "<p>Lorem ipsum from server 2.</p>",
        category: "",
        userID: "",
        likes: null,
        datePosted: null,
        comments: [],
        id: "",
    },
];

router.get("/api/advice/inbox", (req, res) => {
    res.send();
});

router.get("/api/advice/inbox", (req, res) => {
    inbox.push(req.body);
    console.log("Advice: " + req.body);
});

module.exports = router;
