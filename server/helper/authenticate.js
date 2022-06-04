require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    const {SECRET}  = process.env;
    jwt.verify(token, SECRET , (err,user) => {
        if(err) return res.sendStatus(403);
        console.log("authorized")
        req.user = user;
        next();
    })
}

module.exports = authenticateToken;