const express = require('express');
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Protect all To-Do routes
router.use(authMiddleware);

// Define To-Do routes
router.get('/', todoController.getAll);
router.get('/:id', todoController.getById);
router.post('/', todoController.add);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);

module.exports = router;
