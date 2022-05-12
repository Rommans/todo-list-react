import React, { useState } from "react";

function TodoInput(props) {

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClick({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <div className="input__wrapper">
          <input
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="New Task"
          />
          <i className="fas fa-clipboard-list"></i>
        </div>
        <div className="btn__add">
          <button type="submit" onClick={handleSubmit}>
            Add New Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
