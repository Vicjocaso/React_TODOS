import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
    const {id, task, completed} = todo;

    const handleTodoClinck = () => {
        toggleTodo(id);
    }
    return (
        <li>
            {task}
            <input type="checkbox" checked={completed} onChange={handleTodoClinck} />
        </li>
    )
}
