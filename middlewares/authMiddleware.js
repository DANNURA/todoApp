const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret'; 

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload.userId; // Attach user ID to the request
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
