import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span
        className="task-title"
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
