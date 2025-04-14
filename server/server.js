const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// Middleware
app.use(cors({
    origin: 'http://localhost:5173'
  }));
  
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/taskmanager')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import and use routes
const taskRoutes = require('./routes/taskRoutes'); // ✅ THIS IS IMPORTANT
app.use('/api', taskRoutes); // ✅ THIS IS WHAT ALLOWS /api/tasks

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
