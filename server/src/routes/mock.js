const express = require("express");

const router = new express.Router();

let data = [
    { name: "Joshua John Bautista", hobbies: "Piano, Coding, Gaming", age: 18 },
    { name: "Patricia Dolores", hobbies: "BTS, YouTube, Rainbow Looms", age: 18 },
    { name: "Justin Bautista", hobbies: "Eating, Eating, Eating", age: 18 },
];

router.get("/api/mock", (req, res) => {
    res.send(data);
});

router.post("/api/mock", (req, res) => {
    data.push(req.body);
    
    res.send("User succesfully saved.");
});

router.delete("/api/mock/:id", (req, res)=> {
    console.log(data);
    console.log(req.params.id);
    
    
    data = data.filter(user => user.id != req.params.id)
})

module.exports = router;
