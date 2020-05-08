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

    connection.query("SELECT * FROM categories WHERE isSubcategory = 0 AND userID =" + req.params.id + ";", (err, results, fields) => {
        if (!err) {
            try {
                results.map((result) => {
                    let categoryToAdd = {
                        name: result.name,
                        categoryID: result.categoryID,
                        description: result.description,
                        subcategories: [],
                    };
                    connection.query('SELECT * FROM categories WHERE categoryID = "' + categoryToAdd.categoryID + '" AND isSubcategory = 1;', (err, results, fields) => {
                        if (!err) {
                            try {
                                results = JSON.parse(JSON.stringify(results));
                            } catch {
                                console.log("try catch 2");
                                res.json(categories);
                            }

                            results.map((result) => categoryToAdd.subcategories.push({ name: result.name, subcategoryID: result.subcategoryID, advice: [] }));

                            categoryToAdd.subcategories.map((subcategory) => {
                                connection.query("SELECT * FROM advice WHERE subcategoryID = '" + subcategory.subcategoryID + "' AND inInbox = 0;", (err, results, fields) => {
                                    try {
                                        results = JSON.parse(JSON.stringify(results));
                                    } catch {
                                        console.log("try catch 3");
                                        res.json(categories);
                                    }

                                    results.map((result) => subcategory.advice.push({ adviceID: result.adviceID, content: result.content }));
                                });
                            });
                            categories.push(categoryToAdd);
                        } else {
                            console.log(err);
                        }
                    });
                });
            } catch {
                console.log("try catch");
                res.json(categories);
            }
        } else {
            console.log(err);
        }
    });
    setTimeout(() => {
        res.json(categories);
    }, 1250);
});

router.get("/api/advice/inbox/:id", verifyToken, async (req, res) => {
    const queryString = "SELECT * FROM advice WHERE inInbox = 1 AND userID =" + req.params.id + ";";

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.json(results);
        else console.log(err);
    });
});

router.patch("/api/advice/inbox/:id", verifyToken, async (req, res) => {
    const subcategoryID = req.body.subcategoryID;
    const categoryID = req.body.categoryID;

    const queryString = "UPDATE advice SET inInbox = 0, categoryID = " + categoryID + " subcategoryID = " + subcategoryID + ' WHERE adviceID = "' + req.params.id + '";';

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.sendStatus(200);
        else console.log(err);
    });
});

router.patch("/api/advice/:id", verifyToken, async (req, res) => {
    const newContent = req.body.content;

    const queryString = 'UPDATE advice SET content = "' + newContent + '" WHERE adviceID = "' + req.params.id + '";';

    connection.query(queryString, (err, results, fields) => {
        if (!err) res.sendStatus(200);
        else console.log(err);
    });
});

router.post("/api/advice/inbox/", verifyToken, async (req, res) => {
    const newAdvice = req.body;

    const queryString = "INSERT INTO advice (adviceID, userID, inInbox, content, categoryID, subcategoryID, numoflikes, datePosted) VALUES (?, ?, ?, ?, NULL, NULL, NULL, NULL)";

    connection.query(queryString, [newAdvice.adviceID, newAdvice.userID, newAdvice.inInbox, newAdvice.content, newAdvice.categoryID], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.post("/api/advice/", verifyToken, async (req, res) => {
    const newAdvice = req.body;

    const queryString = "INSERT INTO advice (adviceID, userID, inInbox, content, categoryID, subcategoryID, numoflikes, datePosted) VALUES (?, ?, ?, ?, ?, ?, NULL, NULL)";

    connection.query(queryString, [newAdvice.adviceID, newAdvice.userID, 0, newAdvice.content, newAdvice.categoryID, newAdvice.subcategoryID], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
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
            res.sendStatus(200);
        }
    });
});

router.delete("/api/advice/categories/:id", verifyToken, async (req, res) => {
    const queryStringCategory = "DELETE FROM categories WHERE categoryID = ?;";
    const queryStringAdvice = "DELETE FROM advice WHERE categoryID = ?";

    connection.query(queryStringCategory, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });

    connection.query(queryStringAdvice, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.delete("/api/advice/subcategories/:id", verifyToken, async (req, res) => {
    const queryStringSubCategory = "DELETE FROM categories WHERE subcategoryID = ? AND isSubcategory = 1;";
    const queryStringAdvice = "DELETE FROM advice WHERE subcategoryID = ?;";

    connection.query(queryStringSubCategory, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });

    connection.query(queryStringAdvice, [req.params.id], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;
