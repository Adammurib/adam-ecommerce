/**
 * Auth Middleware
 * Checks if the request has a valid authentication header
 */
const authGuard = (req, res, next) => {
    // In a real app, we check for a JWT token here
    const token = req.headers['authorization'];

    if (!token) {
        console.log("⚠️ Security Alert: Unauthorized access attempt blocked.");
        return res.status(401).json({ 
            success: false, 
            message: "Unauthorized: Please log in first." 
        });
    }

    // If token exists, let the request continue to the Controller
    console.log("🔒 Security Check: Access Granted.");
    next();
};

module.exports = authGuard;