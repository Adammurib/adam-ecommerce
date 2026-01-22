const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Crucial: allows app to read the email/password you send

// 1. Database Connection (XAMPP MySQL)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Default XAMPP
    password: '',      // Default XAMPP is empty
    database: 'adam_ecommerce' 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('✅ Connected to XAMPP MySQL database');
});

// 2. Test Route
app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

// --- NEW ROUTES FOR CRUD ---

// A. Login API (The "Read" part of CRUD)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (results.length > 0) {
            res.json({ success: true, message: "Login successful", user: results[0] });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    });
});

// B. Register API (The "Create" part of CRUD)
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ success: false, message: "Email already exists!" });
            }
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, message: "Account created successfully!" });
    });
});

// 3. Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
// C. Update Password (The "U" in CRUD)
app.put('/api/user/update', (req, res) => {
    const { email, newPassword } = req.body;
    const sql = "UPDATE users SET password = ? WHERE email = ?";
    
    db.query(sql, [newPassword, email], (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json({ success: true, message: "Password updated!" });
    });
});

// D. Delete Account (The "D" in CRUD)
app.delete('/api/user/delete', (req, res) => {
    const { email } = req.body;
    const sql = "DELETE FROM users WHERE email = ?";
    
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json({ success: true, message: "Account deleted successfully!" });
    });
});