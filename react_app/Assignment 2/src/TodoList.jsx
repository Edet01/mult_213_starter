import './TodoList.css';

const TodoList = ({ todos }) => {
    return (
        <div className="todo-list">
            <h2>Todo List Component</h2>
            <p>This component receives todos as props and displays them.</p>
            <div className="todo-items-container">
                {todos.map((todo) => (
                    <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            readOnly 
                            className="todo-checkbox"
                        />
                        <span className="todo-text">{todo.text}</span>
                    </div>
                ))}
            </div>
            <button className="remove-completed-btn">
                Remove Completed Items
            </button>
        </div>
    );
};

export default TodoList;