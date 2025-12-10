import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import TodoList from './TodoList';
import Card from './card';

function App() {
  // State for todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Meeting with Arlin", completed: false },
    { id: 2, text: "Meeting with Jesse", completed: false },
    { id: 3, text: "A keynote Speech for new comers -IDT", completed: true }
  ]);

  // State for new task input
  const [newTask, setNewTask] = useState('');

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const newTodo = {
      id: todos.length + 1,
      text: newTask,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  return (
    <div className="app">

      <Header 
        title="Welcome to My Website!" 
        message="Thanks for visiting my site - DAGA App" 
      />

      <main className="main-content">
        
        <TodoList todos={todos} />
        
        {/* Working Form - Just as an extra functionality by my instructor */}
        <div className="form-section">
          <h3>Add New Task (Extra Feature)</h3>
          <form onSubmit={handleSubmit} className="task-form">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task..."
              className="task-input"
              required
            />
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </form>
        </div>

        {/*Show tasks as individual cards */}
        <div className="cards-section">
          <h3>Task Cards (New tasks appear here)</h3>
          <div className="cards-container">
            {todos.map((todo) => (
              <Card 
                key={todo.id}
                title={todo.text}
                subtitle={todo.completed ? "Completed" : "Pending"}
                content="This is a task item displayed on a card."
                image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            ))}
          </div>
        </div>

        
        <Card 
          title="Daga Card" 
          subtitle="My Card Subtitle" 
          content="This is the content of my card."
          image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </main>

      
      <Footer message="Contact me at contact@mywebsite.com" />
    </div>
  );
}

export default App;