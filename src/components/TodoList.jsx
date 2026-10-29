
import React from 'react';

const TodoList = () => {
    const TaskList = [
        { id: 1, title: 'Task 1', content: "o do home work", completed: false },
        { id: 2, title: 'Task 2', content: "o do shopping", completed: true },
        { id: 3, title: 'Task 3', content: "o do exercise", completed: false },
    ];

  return (
    <div>
      <h2>Todo List</h2>
        {TaskList.map((task) => (
            <TodoItem
                key={task.id}
                title={task.title}
                content={task.content}
                status={task.completed ? 'Completed' : 'Not Completed'}
            />
        ))}
    </div>
  );
};

export default TodoList;