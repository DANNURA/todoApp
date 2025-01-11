const Todo = require('../models/Todo');

// Create a new Todo
const createTodo = async (req, res) => {
    const { title } = req.body;
    try {
        const newTodo = new Todo({
            title,
            userId: req.user.id,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all Todos for a user
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.user.id });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a Todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        if (todo.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        todo.title = title || todo.title;
        todo.completed = completed !== undefined ? completed : todo.completed;

        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        if (todo.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        await todo.remove();
        res.json({ message: 'Todo removed' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
