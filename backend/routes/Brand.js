const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/Brand');

// Brand routes
router.get('/', getAll);

module.exports = router;
