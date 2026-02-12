const express = require('express');
const router = express.Router();
const { create, getAll, getById, updateById, deleteById, undeleteById } = require('../controllers/Product');

// Product routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);
router.patch('/:id/undelete', undeleteById);

module.exports = router;
