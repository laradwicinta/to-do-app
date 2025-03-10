import React, { useState } from "react";

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      )}
      <button onClick={() => setIsEditing(true)}>✏️</button>
      <button onClick={() => onDelete(todo.id)}>🗑️</button>
    </div>
  );
};

export default TodoItem;
