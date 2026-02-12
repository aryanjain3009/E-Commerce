const express = require('express');
const router = express.Router();
const { create, getByProductId, updateById, deleteById } = require('../controllers/Review');

// Review routes
router.post('/', create);
router.get('/:id', getByProductId);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);

module.exports = router;
