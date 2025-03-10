import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Tambah To-Do" />
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>

    </form>
  );
};

export default TodoForm;
