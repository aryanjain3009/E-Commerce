const express = require('express');
const router = express.Router();
const { create, getByUserId, getAll, updateById } = require('../controllers/Order');

// Order routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getByUserId);
router.patch('/:id', updateById);

module.exports = router;
