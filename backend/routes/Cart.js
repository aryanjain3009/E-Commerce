const express = require('express');
const router = express.Router();
const { create, getByUserId, updateById, deleteById, deleteByUserId } = require('../controllers/Cart');

// Cart routes
router.post('/', create);
router.get('/:id', getByUserId);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);
router.delete('/user/:id', deleteByUserId);

module.exports = router;
