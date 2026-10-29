
import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', content: "To do home work", completed: false },
        { id: 2, title: 'Task 2', content: "To do shopping", completed: true },
        { id: 3, title: 'Task 3', content: "To do exercise", completed: false },
    ]);


    const handleAddNewTask = (inputValue) => {
        if(inputValue.trim() === '') {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: `Task ${tasks.length + 1}`,
            content: inputValue,
            completed: false,
        };

        setTasks([...tasks, newTask]);
    };


  return (
   <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
            <h2>My Todo List</h2>

            <TodoForm onAddTask={handleAddNewTask} />

            {tasks.map((task) => (
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