const express = require("express");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Routes
const mockRouter = require("./routes/mock");
const adviceRouter = require("./routes/advice");
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts")

const app = express();
const port = process.env.PORT || 8080;

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
    );

    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Pass to next layer of middleware
    next();
});
app.use(express.urlencoded());
app.use(express.json());
app.use(mockRouter);
app.use(userRouter);
app.use(postsRouter)
app.use(adviceRouter);

app.listen(port, () => console.log(`Server is now running on port ${port}`));
