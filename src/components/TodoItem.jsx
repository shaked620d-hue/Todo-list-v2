import React from 'react'

const getStatusColor = (status) => {
    switch (status) {
        case 'Completed':
            return '#e8f5e9'; // ירוק בהיר מאוד
        case 'Not Completed':
            return '#ffebee'; // אדום בהיר מאוד
        default:
            return '#f3e5f5'; // סגול בהיר מאוד
    }
};

const TodoItem = ({ id, title, content, status, completed, onComplete }) => {
    const itemStyle = {
        backgroundColor: getStatusColor(status),
        padding: '10px 15px',
        margin: '8px 0',
        borderRadius: '6px',
        border: '1px solid #ccc'
    };

    return (
        <div style={itemStyle}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p><strong>Status:</strong> {status}</p>

            {!completed && (
                <button
                    onClick={() => onComplete(id)}
                    style={{
                        marginTop: '8px',
                        padding: '6px 12px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    המשימה בוצעה
                </button>
            )}
        </div>
    )
}

export default TodoItem;
