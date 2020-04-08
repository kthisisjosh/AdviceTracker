const express = require("express");

const router = new express.Router();

const data = [
    { name: "Joshua Bautista", hobbies: "Piano, Coding, Gaming", age: 18 },
    { name: "Patricia Dolores", hobbies: "BTS, YouTube, Rainbow Looms", age: 18 },
    { name: "Justin Bautista", hobbies: "Eating, Eating, Eating", age: 18 },
];

router.get("/api/mock", (req, res) => {
    res.send(data);
});

module.exports = router;
