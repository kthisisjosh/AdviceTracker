const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const algoliasearch = require("algoliasearch");
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex("Posts");

const verifyToken = require("../middleware/verifyToken");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

router.post("/api/posts", verifyToken, async (req, res) => {
    const postLink = req.body;

    const queryString = "SELECT * FROM posts WHERE permalink = \'" + postLink + "\';";

    connection.query(queryString, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.json(results[0]);
        }
    });
});

router.post("/api/posts", verifyToken, async (req, res) => {
    const {
        content,
        content_stripped,
        category,
        likes,
        post_date,
        post_date_timestamp,
        user_id,
        user_name,
        profile_url,
        user_image_url,
        permalink,
        comments,
        num_of_comments,
        post_id,
        objectID,
    } = req.body;

    index
        .saveObject({
            content,
            content_stripped,
            category,
            likes,
            post_date,
            post_date_timestamp,
            user_id,
            user_name,
            profile_url,
            user_image_url,
            permalink,
            comments,
            num_of_comments,
            post_id,
            objectID,
        })
        .then(({ objectID }) => {
            console.log("Succesfully saved object with id " + objectID);
        })
        .catch((e) => console.log(e));

    const queryString =
        "INSERT INTO posts (content, content_stripped, category, likes, post_date, post_date_timestamp, user_id, user_name, profile_url, user_image_url, permalink, comments, num_of_comments, post_id, objectID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(
        queryString,
        [content, content_stripped, category.join(), likes, post_date, post_date_timestamp, user_id, user_name, profile_url, user_image_url, permalink, comments, num_of_comments, post_id, objectID],
        (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});

module.exports = router;
