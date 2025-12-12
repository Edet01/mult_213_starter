import './Card.css'; // Imports Styling

// Card component - displays each individualm tasks
const Card = ({ title, completed, onDelete }) => {
    return (
        <div className={`card ${completed ? 'completed' : ''}`}>
            <div className="card-content">
                <div className="card-header">
                    <div className="checkbox-container">
                        <div className={`checkbox ${completed ? 'checked' : ''}`}>
                            {completed && '✓'}
                        </div>
                    </div>
                    <div className="card-title-container">
                        <h3 className="card-title">{title}</h3>
                        <span className="card-status">
                            {completed ? 'Completed' : 'Pending'}
                        </span>
                    </div>
                </div>
                <button 
                    className="delete-btn"
                    onClick={onDelete}
                    aria-label="Delete task"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Card;