const express = require('express');
const router = express.Router();
const { create, getByUserId, updateById, deleteById } = require('../controllers/Wishlist');

// Wishlist routes
router.post('/', create);
router.get('/:id', getByUserId);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);

module.exports = router;
