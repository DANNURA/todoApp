const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// To-Do routes
app.use('/todos', todoRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
