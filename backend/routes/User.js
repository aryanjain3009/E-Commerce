const express = require('express');
const router = express.Router();
const { getById, updateById } = require('../controllers/User');

// User routes
router.get('/:id', getById);
router.patch('/:id', updateById);

module.exports = router;
