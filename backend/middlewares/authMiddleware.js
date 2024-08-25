import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config.js';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });

        req.user = user; 
        next();
    });
};

export default authenticateToken;
