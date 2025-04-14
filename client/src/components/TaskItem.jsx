import React from 'react';

const TaskItem = ({ task, onEdit }) => {
  return (
    <li>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Deadline: {task.deadline ? new Date(task.deadline).toLocaleString() : "No deadline"}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => onEdit(task)}>Edit</button>
    </li>
  );
};

export default TaskItem;
