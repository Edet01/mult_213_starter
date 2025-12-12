import './TodoList.css';

function TodoList(props) {  // No destructuring
    var todos = props.todos;  // Get todos from props
    
    return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <ul className="todo-items">
                {/* Map through todos array */}
                {todos.map(function(todo) {
                    return (
                        <li key={todo.id} className={todo.completed ? 'todo-item completed' : 'todo-item'}>
                            {/* Checkbox - static */}
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                readOnly 
                                className="todo-checkbox"
                            />
                            {/* Todo text */}
                            <span className="todo-text">{todo.text}</span>
                        </li>
                    );
                })}
            </ul>
            {/* Static button - doesn't work */}
            <button className="remove-completed-btn">
                Remove Completed Items
            </button>
        </div>
    );
}

export default TodoList;