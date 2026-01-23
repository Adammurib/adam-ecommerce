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