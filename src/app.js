const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to DB
connectDB();

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Swagger UI setup
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = app;
