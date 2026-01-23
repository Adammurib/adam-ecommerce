const db = require('../config/db');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    try {
        await db.execute("INSERT INTO users (email, password) VALUES (?, ?)", [email, password]);
        res.json({ success: true, message: "User created!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await db.execute("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);
        if (rows.length > 0) {
            res.json({ success: true, user: rows[0] });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
// Update Password (The "U" in CRUD)
exports.updatePassword = async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        await db.execute("UPDATE users SET password = ? WHERE email = ?", [newPassword, email]);
        res.json({ success: true, message: "Password updated!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Delete Account (The "D" in CRUD)
exports.deleteAccount = async (req, res) => {
    const { email } = req.body;
    try {
        await db.execute("DELETE FROM users WHERE email = ?", [email]);
        res.json({ success: true, message: "Account deleted!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};