import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './TaskManager.css';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, title: 'Complete assignment', completed: false },
        { id: 2, title: 'Read React documentation', completed: false }
      ],
      newTaskTitle: ''
    };
  }

  addTask = (title) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      title: title,
      completed: false
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  };

  toggleTaskCompletion = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  render() {
    return (
      <div className="task-manager">
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleTaskCompletion={this.toggleTaskCompletion}
        />
      </div>
    );
  }
}

export default TaskManager;
