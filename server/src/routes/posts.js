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

router.get("/api/posts/:link", async (req, res) => {
    try {
        const link = req.params.link.split(" ");
        const queryString = "SELECT * FROM posts WHERE permalink = 'https://advicetracker.life/browse/" + link[0] + "/" + link[1] + "/';";

        connection.query(queryString, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(results[0]);
            }
        });
    } catch (error) {
        console.log(error);
    }
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

router.delete("/api/posts/:id", verifyToken, async (req, res) => {
    const queryString = "DELETE FROM posts WHERE objectID ='" + req.params.id + "';";

    index.deleteObject(req.params.id);

    connection.query(queryString, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;
