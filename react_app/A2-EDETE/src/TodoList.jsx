import './TodoList.css';
<<<<<<< HEAD:react_app/A2-EDETE/src/TodoList.jsx

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
=======
import { Card } from './Card';

// Add a new component for the TodoList
{/* 

<TodoList todos={[
  { id: 1, text: "Complete React assignment", completed: false },
  { id: 2, text: "Study for math test", completed: false },
  { id: 3, text: "Do laundry", completed: true }
]} />

*/}
export function TodoList(props) {
    // props is some JSON that looks like {todos: []Todo}

    const todos = props.todos;

    // Build up the UI element for the TODOs
    let listContent = <></>;

    if (todos.length == 0) {
        // If there are no TODOs, tell the user what to do
        listContent = <Card
            title="No tasks yet!"
            content="Add a new task using the form above."
            backgroundColor="orange"
        />;
    } else {
        // If there are TODOs, render them as li elements
        listContent = todos.map((item, i) => {

            // Render Card elements instead of li elements

            return <Card
                title={item.name}
                backgroundColor="green"
            />

            // return <li key={"todo-" + i} className="todo-item">
            //   <input type="checkbox" className="todo-item__checkbox" data-id={i} id={"todo-" + i} />
            //   <label htmlFor={"todo-" + i} className="todo-item__label">{item.name}</label>
            // </li>
        })
    }

    return (<>
        <section className='todo-list-section'>
            <h2>My TODOs:</h2>
            <ul className="todo-list" id="todo-list">
                {listContent}
            </ul>
        </section>
    </>);
}
>>>>>>> 6a1b381076d8549dcb34ddd700ef8016ddca8b04:react_app/todo_app/src/TodoList.jsx
