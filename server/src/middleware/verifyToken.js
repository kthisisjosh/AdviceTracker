const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    jwt.verify(token, 'mySecret');

    req.token = token;

    next();
  } catch (e) {
    res.status(401).send("Forbidden");
  }
};

module.exports = verifyToken;