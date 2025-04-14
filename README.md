# Task Manager

A full-stack web application that allows users to manage their tasks with details such as name, description, deadline, priority, and completion status. This project includes both a frontend (React + Vite) and a backend (Express + MongoDB).

## Features

- **Add, Edit, and Delete Tasks**: Manage tasks with a simple user interface.
- **Task Priority**: Set tasks to "Low", "Medium", or "High" priority.
- **Task Deadline**: Assign deadlines to tasks.
- **Task Completion**: Mark tasks as completed or not.
- **Responsive UI**: Built using React and styled for a seamless experience on desktop and mobile.
- **Backend**: Uses Express.js for the server and MongoDB for the database to store tasks.

## Tech Stack

- **Frontend**:
  - React (with Vite for fast development)
  - Axios (for making HTTP requests to the backend)
  - CSS for styling

- **Backend**:
  - Node.js (with Express.js)
  - MongoDB (for database storage)
  - Mongoose (for MongoDB object modeling)

- **Other**:
  - CORS (Cross-Origin Resource Sharing) for handling requests from the frontend
  - Git (version control)
  
## Project Structure
Task-Manager/ 
├── client/ # Frontend code (React + Vite)
│ ├── src/ # Source code for React components 
│ ├── public/ # Public assets like index.html 
│ ├── .gitignore # Frontend .gitignore file 
│ └── package.json # Frontend dependencies 
├── server/ # Backend code (Express + MongoDB) 
│ ├── routes/ # API routes 
│ ├── models/ # MongoDB models 
│ ├── .gitignore # Backend .gitignore file 
│ └── server.js # Main server file 
├── .gitignore # Root .gitignore for node_modules and build files 
├── README.md # Project description 
├── package.json # Root package.json (optional) 
└── ...




json formate
{
  "name": "Task name",
  "description": "Task description",
  "deadline": "2025-04-14T12:00",
  "priority": "High",
  "completed": false
}