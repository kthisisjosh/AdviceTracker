const express = require("express");
const mysql = require("mysql");
const router = new express.Router();

const verifyToken = require("../middleware/verifyToken");

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

router.get("/api/advice/:id", async (req, res) => {
    const categories = [];

    connection.query("SELECT * FROM categories WHERE isSubcategory = 0 AND userID =" + req.params.id + ";", async (err, results, fields) => {
        if (!err) {
            results.map((result) => {
                let categoryToAdd = {
                    name: result.name,
                    categoryID: result.categoryID,
                    description: result.description,
                    subcategories: [],
                };
                connection.query('SELECT * FROM categories WHERE categoryID = "' + categoryToAdd.categoryID + '" AND isSubcategory = 1;', async (err, results, fields) => {
                    if (!err) {
                        results = JSON.parse(JSON.stringify(results));

                        results.map((result) => categoryToAdd.subcategories.push({ name: result.name, subcategoryID: result.subcategoryID, advice: [] }));

                        categoryToAdd.subcategories.map((subcategory) => {
                            connection.query("SELECT * FROM advice WHERE subcategoryID = " + subcategory.subcategoryID + " AND inInbox = 0;", async (err, results, fields) => {
                                results = JSON.parse(JSON.stringify(results));

                                results.map((result) => subcategory.advice.push({ adviceID: result.adviceID, content: result.content }));
                            });
                        });
                        categories.push(categoryToAdd);
                    } else {
                        console.log(err);
                    }
                });
            });
        } else {
            console.log(err);
        }
    });
    setTimeout(() => {
        res.json(categories);
    }, 650);
});

router.get("/api/advice/inbox/:id", verifyToken, async (req, res) => {
    const queryString = "SELECT * FROM advice WHERE inInbox = 1 AND userID =" + req.params.id + ";";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.put("/api/advice/inbox/:id", verifyToken, async (req, res) => {
    const subcategoryID = req.body.subcategoryID;

    const queryString = "UPDATE advice SET inInbox = 0, subcategoryID = " + subcategoryID + ' WHERE adviceID = "' + req.params.id + '";';

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.sendStatus(200);
        else console.log(err);
    });
});

router.post("/api/advice/inbox/", verifyToken, async (req, res) => {
    const newAdvice = req.body;

    const queryString = "INSERT INTO advice (adviceID, userID, inInbox, content, subcategoryID, numoflikes, datePosted) VALUES (?, ?, ?, ?, NULL, NULL, NULL)";

    connection.query(queryString, [newAdvice.adviceID, newAdvice.userID, newAdvice.inInbox, newAdvice.content], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Successfully created advice with content ${newAdvice.content}`);
            res.sendStatus(200);
        }
    });
});

router.post("/api/advice/", verifyToken, async (req, res) => {
    const newAdvice = req.body;

    const queryString = "INSERT INTO advice (adviceID, userID, inInbox, content, subcategoryID, numoflikes, datePosted) VALUES (?, ?, ?, ?, ?, NULL, NULL)";

    connection.query(queryString, [newAdvice.adviceID, newAdvice.userID, 0, newAdvice.content, newAdvice.subcategoryID], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Successfully created advice with content ${newAdvice.content}`);
            res.sendStatus(200);
        }
    });
});

router.post("/api/advice/categories/", verifyToken, async (req, res) => {
    const newCategory = req.body;

    const queryString = "INSERT INTO categories (name, categoryID, userID, description, isSubcategory, subcategoryID) VALUES (?, ?, ?, ?, ?, NULL)";

    connection.query(queryString, [newCategory.name, newCategory.categoryID, newCategory.userID, newCategory.description, newCategory.isSubcategory], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Create category ${newCategory.name}`);
            res.sendStatus(200);
        }
    });
});

router.post("/api/advice/subcategories/", verifyToken, async (req, res) => {
    const newSubCategory = req.body;

    const queryString = "INSERT INTO categories (name, categoryID, userID, description, isSubcategory, subcategoryID) VALUES (?, ?, ?, NULL, ?, ?)";

    connection.query(queryString, [newSubCategory.name, newSubCategory.categoryID, newSubCategory.userID, 1, newSubCategory.subcategoryID], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Create category ${newCategory.name}`);
            res.sendStatus(200);
        }
    });
});

router.delete("/api/advice/inbox/:id", verifyToken, async (req, res) => {
    const queryString = "DELETE FROM advice WHERE inInbox = 1 AND adviceID = ?";

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

router.delete("/api/advice/:id", verifyToken, async (req, res) => {
    const queryString = "DELETE FROM advice WHERE inInbox = 0 AND adviceID = ?";

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

router.delete("/api/advice/categories/:id", verifyToken, async (req, res) => {
    const queryString = "DELETE FROM categories WHERE categoryID = ? AND isSubcategory = 0;";

    connection.query(queryString, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Deleted advice with ID ${req.params.id}`);
            res.sendStatus(200);
        }
    });
});

router.delete("/api/advice/subcategories/:id", verifyToken, async (req, res) => {
    const queryString = "DELETE FROM categories WHERE subcategoryID = ? AND isSubcategory = 1;";

    connection.query(queryString, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`Deleted advice with ID ${req.params.id}`);
            res.sendStatus(200);
        }
    });
});

module.exports = router;
