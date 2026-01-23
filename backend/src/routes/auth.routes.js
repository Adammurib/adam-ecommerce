const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authGuard = require('../middleware/auth.middleware'); // The "Gatekeeper"

// --- Public Routes ---
// Anyone can access these to join or enter the app
router.post('/register', authController.register);
router.post('/login', authController.login);

// --- Protected Routes (CRUD) ---
// These require the authGuard middleware to verify the user first
router.put('/update', authGuard, authController.updatePassword);
router.delete('/delete', authGuard, authController.deleteAccount);

module.exports = router; // This MUST be at the end