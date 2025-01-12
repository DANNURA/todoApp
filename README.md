Getting Started

Prerequisites

Node.js (v14 or higher)

MongoDB (Local or Atlas)

Installation

Clone the repository:

git clone <repository_url>
cd swagger-todo-api

Install dependencies:

npm install

Start the MongoDB service (if running locally):

mongod

Start the application:

API Endpoints

Authentication

Method

Endpoint

Description

POST

/auth/register

Register a new user

POST

/auth/login

Login and get a JWT

To-Do

Method

Endpoint

Description

GET

/todos

Get all tasks (JWT required)

GET

/todos/{id}

Get a task by ID (JWT required)

POST

/todos

Create a new task (JWT required)

PUT

/todos/{id}

Update a task by ID (JWT required)

DELETE

/todos/{id}

Delete a task by ID (JWT required)

Environment Variables

Create a .env file in the root directory and add the following:
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://localhost:27017/todo_db
PORT=3000

Swagger Documentation

Access interactive API documentation at: http://localhost:3000/api-docs

Technologies Used

Node.js: Backend runtime.

Express.js: Web framework.

MongoDB: Database for data persistence.

Mongoose: ODM library for MongoDB.

JSON Web Tokens (JWT): Secure authentication.

Swagger: API documentation.

Bcrypt: Password hashing.

Future Enhancements

Add user roles (e.g., admin and regular user).

Implement pagination for the task list.

Add unit tests with Jest.

Deploy to a cloud platform (e.g., AWS, Heroku).

License

This project is licensed under the MIT License.

