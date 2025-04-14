import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ taskToEdit, setTaskToEdit, refreshTasks }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    deadline: '',
    priority: '',
    completed: false,
  });

  // Load task to edit into the form
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (task._id) {
        // UPDATE task
        await axios.put(`http://localhost:5000/api/tasks/${task._id}`, task);
        console.log("Updated:", task);
      } else {
        // CREATE task
        await axios.post('http://localhost:5000/api/tasks', task);
        console.log("Created:", task);
      }

      setTask({
        name: '',
        description: '',
        deadline: '',
        priority: '',
        completed: false,
      });
      setTaskToEdit(null); // reset edit mode
      refreshTasks();      // reload updated list
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{task._id ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        required
      />
      <select name="priority" value={task.priority} onChange={handleChange} required>
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="completed"
          checked={task.completed}
          onChange={handleChange}
        />
        Completed
      </label>
      <button type="submit">{task._id ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
