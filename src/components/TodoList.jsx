
import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task ', content: "To do home work", completed: false },
        { id: 2, title: 'Task ', content: "To do shopping", completed: true },
        { id: 3, title: 'Task ', content: "To do exercise", completed: false },
    ]);

    const [editingTask, setEditingTask] = useState(null);

    const handleSaveTask = (content) => {
        if (content.trim() === '') {
            return;
        }

        if (editingTask) {
            setTasks(tasks.map((task) => 
                task.id === editingTask.id ? { ...task, content: content } : task
            ));
            setEditingTask(null);
        } else {
            const newId = Date.now();
            const newTask = {
                id: newId,
                title: 'Task ',
                content: content,
                completed: false,
            };
            setTasks([...tasks, newTask]);
        }
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
        if (editingTask && editingTask.id === taskId) {
            setEditingTask(null);
        }
    };

    const handleStartEdit = (task) => {
        setEditingTask(task);
    };

    
  const  handleCompleteTask = (taskId) => {
        setTasks(tasks.map((task) =>{
            if(task.id === taskId) {
                return {...task, completed: true};
            }
            return task;
        }));

    };

    return (
   <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
            <h2>My Todo List</h2>

            <TodoForm 
                onSaveTask={handleSaveTask} 
                editingTask={editingTask} 
                onCancelEdit={() => setEditingTask(null)}
            />

            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    content={task.content}
                    completed={task.completed} 
                    status={task.completed ? 'Completed' : 'Not Completed'}
                    onComplete={handleCompleteTask}
                    onDelete={handleDeleteTask}  
                    onEdit={handleStartEdit}
                />
            ))}
        </div>
  );
};

export default TodoList;