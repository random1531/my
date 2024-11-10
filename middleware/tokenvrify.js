const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    
    
    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    try {
       
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        
        req.user = verified;
        next();  
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = verifyToken;
