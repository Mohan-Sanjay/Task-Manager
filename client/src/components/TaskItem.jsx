import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit }) => {
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'low':
        return 'low-priority';
      case 'medium':
        return 'medium-priority';
      case 'high':
        return 'high-priority';
      default:
        return '';
    }
  };

  return (
    <li className={`task-item ${getPriorityClass(task.priority)}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p><strong>Deadline:</strong> {new Date(task.deadline).toLocaleString()}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.completed ? 'Completed' : 'Incomplete'}</p>
      <button onClick={onEdit}>Edit</button>
    </li>
  );
};

export default TaskItem;
