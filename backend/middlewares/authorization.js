
const jwt = require('jsonwebtoken');



module.exports = async(req, res, next) => {

    // const {authorization} = req.headers;

    // const {author} = jwt.verify(authorization, 'secreto');

    // req.author = author;

    next();
}