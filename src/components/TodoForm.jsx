import React, { useState, useEffect } from 'react';

const TodoForm = ({ onSaveTask, editingTask, onCancelEdit }) => {
    const [inputValue, setInputValue] = useState('');
    
    

    useEffect(() => {
        if (editingTask) {
            setInputValue(editingTask.content);
        } else {
            setInputValue('');
        }

    }, [editingTask]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            return;
        }

    onSaveTask(inputValue);
    setInputValue('');
    };


return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ padding: '8px', width: '65%', marginRight: '5px' }}
        />
        <button
            type="submit"
            style={{
                padding: '8px 12px',
                backgroundColor: editingTask ? '#ff9800' : '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            {editingTask ? 'עדכן' : 'Add Task'}
        </button>

        {/* כפתור ביטול עריכה במידה ורוצים לצאת ממצב עריכה */}
        {editingTask && (
            <button
                type="button"
                onClick={() => { setInputValue(''); onCancelEdit(); }}
                style={{
                    padding: '8px 8px',
                    marginLeft: '5px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                ביטול
            </button>
        )}

    </form>
);

};

export default TodoForm;