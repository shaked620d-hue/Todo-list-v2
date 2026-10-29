    import React from 'react'
    
const getStatusColor =(status) => {
  switch (status) {
    case 'Completed':
        return 'green';
    case 'Not Completed':
        return 'red';
    default:
        return 'purple';
    }
};

const TodoItem = ({ title, content, status }) => {
    const itemStyle = {
        backgroundColor: getStatusColor(status),
       padding: '10px 15px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc'
    };

      return (
        <div style ={itemStyle}>
            <h3>{title}</h3>
            <p>{content}</p>
            <span>{status}</span>
        </div>
      )
    }

    export default TodoItem;
    