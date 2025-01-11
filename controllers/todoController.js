const todoModel = require('../models/todoModel');

module.exports = {
    getAll: (req, res) => {
        const tasks = todoModel.getAll();
        res.json(tasks);
    },
    getById: (req, res) => {
        const id = parseInt(req.params.id, 10);
        const task = todoModel.getById(id);

        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    },
    add: (req, res) => {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: 'Title is required' });

        const newTask = todoModel.add({ title, description });
        res.status(201).json(newTask);
    },
    update: (req, res) => {
        const id = parseInt(req.params.id, 10);
        const { title, description } = req.body;
        const updatedTask = todoModel.update(id, { title, description });

        if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
        res.json(updatedTask);
    },
    delete: (req, res) => {
        const id = parseInt(req.params.id, 10);
        const deleted = todoModel.delete(id);

        if (!deleted) return res.status(404).json({ error: 'Task not found' });
        res.status(204).send();
    }
};
