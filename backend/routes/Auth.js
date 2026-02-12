const express = require('express');
const router = express.Router();
const { signup, login, verifyOtp, resendOtp, forgotPassword, resetPassword, logout, checkAuth } = require('../controllers/Auth');

// Auth routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/logout', logout);
router.get('/check-auth', checkAuth);

module.exports = router;
