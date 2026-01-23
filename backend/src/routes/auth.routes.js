const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;

// Add these below your login and register routes
router.put('/update', authController.updatePassword);
router.delete('/delete', authController.deleteAccount);