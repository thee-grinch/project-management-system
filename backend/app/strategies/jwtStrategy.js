const jwt = require('jsonwebtoken');

// Define your secret key
const secretKey = 'secret';

// Middleware function to verify JWT and authenticate users
const authenticateUser = (req, res, next) => {
    console.log('inside authenticate')
    if (req.path === '/api/login') return next();
    // Get the token from the request headers or query parameters
    let token = req.headers.authorization || req.query.token;
    // console.log(req.headers.authorization)
    console.log(token)
    
    if (token && token.startsWith('Bearer ')) {
        // Remove "Bearer " to get the actual token
        token = token.slice(7, token.length);
        console.log(token)
    }

    // Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, secretKey);

        // Attach the decoded user information to the request object
        console.log(decoded)
        req.user = decoded;
        req.isAuthenticated = true;

        // Call the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateUser;