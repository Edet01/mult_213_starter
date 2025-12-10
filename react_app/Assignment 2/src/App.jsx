import './App.css';
import { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import Card from './card';

// State for todos - stores all tasks
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete React assignment", completed: false },
    { id: 2, text: "Study for math test", completed: false },
    { id: 3, text: "Do laundry", completed: true }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: newTodo,
        completed: false
      }
    ]);
    setNewTodo(''); // Clear input field after adding
  };

  return (
    <div className="app">
      <Header 
        title="Task Manager - DAGA app" 
        message="Keeping track of all your tasks..."
      />

      <main className="main">
        {/* Add Task Form */}
        <div className="form-container">
          <form onSubmit={handleAddTodo} className="task-form">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="task-input"
              required
            />
            <button type="submit" className="add-btn">
              Add {/*Submit button*/}
            </button>
          </form>
        </div>

        {/* Tasks Count */}
        <div className="tasks-info">
          <h3>Tasks ({todos.length})</h3>
        </div>

        {/* Todo Cards that displays all tasks as cards, as required by my Instructor Jesse*/}
        <div className="cards-container">
          {todos.map((todo) => (
            <Card 
              key={todo.id}
              title={todo.text}
              completed={todo.completed}
              onDelete={() => {}}
            />
          ))}
        </div>

        {/* Static Action */}
        <div className="action-container">
          <button className="action-btn">
            Clear Completed
            {/*This is an assignment, at this stage, buttons are not to work now, Edet*/}
          </button>
          <i><p className="demo-note">This is an assignment, buttons are not to work now(static) - Edet</p></i>
        </div>
      </main>

      <Footer message="© 2025 DAGA Task App
      Designed and managed by Edet's Design"/>
    </div>
  );
}

export default App;