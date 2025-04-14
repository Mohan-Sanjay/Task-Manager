import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const refreshTasks = () => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
        refreshTasks={refreshTasks}
      />
      <TaskList
        tasks={tasks}
        setTaskToEdit={setTaskToEdit}
        refreshTasks={refreshTasks}
      />
    </div>
  );
};

export default App;
