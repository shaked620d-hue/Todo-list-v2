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

const TodoItem = ({ id, title, content, status, completed, onComplete, onEdit, onDelete }) => {
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

        <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>

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

            <button
                    onClick={() => onEdit({ id, title, content, completed })}
                    style={{ padding: '5px 10px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    עריכה
                </button>

                <button
                    onClick={() => onDelete(id)}
                    style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    מחיקה
                </button>
                    </div>

        </div>
    )
}

export default TodoItem;
