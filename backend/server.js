const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to read JSON sent from the frontend

// 1. Database Connection (XAMPP MySQL)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Default XAMPP username
    password: '',      // Default XAMPP password is empty
    database: 'adam_ecommerce' // We will create this in XAMPP next
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('✅ Connected to XAMPP MySQL database');
});

// 2. Simple Route to test the server
app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

// 3. Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});