import React, { useEffect } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setTaskToEdit, refreshTasks }) => {
  useEffect(() => {
    refreshTasks(); // Fetch tasks on component mount
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={() => setTaskToEdit(task)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
