const Todo = require('../models/todoModel');

module.exports = {
    getAll: async (req, res) => {
        try {
            const tasks = await Todo.find();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    },
    getById: async (req, res) => {
        try {
            const task = await Todo.findById(req.params.id);
            if (!task) return res.status(404).json({ error: 'Task not found' });
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch task' });
        }
    },
    add: async (req, res) => {
        try {
            const { title, description } = req.body;
            if (!title) return res.status(400).json({ error: 'Title is required' });

            const newTask = new Todo({ title, description });
            await newTask.save();
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    },
    update: async (req, res) => {
        try {
            const { title, description } = req.body;
            const updatedTask = await Todo.findByIdAndUpdate(
                req.params.id,
                { title, description },
                { new: true, runValidators: true }
            );
            if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
            res.json(updatedTask);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update task' });
        }
    },
    delete: async (req, res) => {
        try {
            const deletedTask = await Todo.findByIdAndDelete(req.params.id);
            if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete task' });
        }
    },
};
