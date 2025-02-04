const mongoose = require('mongoose');
let todos = []; 

const todoService = {
    getAll: () => todos,
    getById: (id) => todos.find((todo) => todo.id === id),
    add: (task) => {
        const id = todos.length + 1;
        const newTask = { id, ...task };
        todos.push(newTask);
        return newTask;
    },
    update: (id, updatedTask) => {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index === -1) return null;

        todos[index] = { ...todos[index], ...updatedTask };
        return todos[index];
    },
    delete: (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index === -1) return false;

        todos.splice(index, 1);
        return true;
    }
};

// Define To-Do schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create To-Do model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo, todoService };
