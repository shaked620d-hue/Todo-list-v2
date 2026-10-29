import React, { useState } from 'react';

const TodoForm = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '') {
            return;
        }

        onAddTask(inputValue);
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ padding: '8px', width: '65%', marginRight: '5px' }}
            />
            <button type="submit" style={{ padding: '8px 12px' }}>Add Task</button>
        </form>
    );
}

export default TodoForm;