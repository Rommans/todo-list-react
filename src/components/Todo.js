import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Switch from "./Switch";
import UpdateButtons from "./UpdateButtons";
import DeleteButtons from "./DeleteButtons";

const FILTER_MAP = {
  All: () => true,
  Todo: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Todo() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");
  const [searchBar, setSearchBar] = useState("");

  const modalStyle = {
    overlay: {
      position: "fixed",
      zIndex: 1020,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(69, 69, 69, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      background: "#a4a4a4",
      color: "white",
      width: "25rem",
      maxWidth: "calc(100vw - 2rem)",
      maxHeight: "calc(100vh - 2rem)",
      overflowY: "auto",
      position: "relative",
      border: "1px solid #ccc",
      borderRadius: "0.3rem",
      textAlign: "center",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const removedItem = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedItem);
  };

  const editTodo = (id, text) => {
    let editTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(editTodos);
    setEdit(false);
  };

  const handleEditChange = (id, text) => {
    setEdit(id);
    setInputValue(text);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // todo.complete = !todo.complete;
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="back-img"></div>
      <div className="todo">
        <div className="title">
          <div className="title__todo">
            <h2>TodoList</h2>
            <Switch />
          </div>
        </div>
        <div className="container__todo-input">
          <div className="todo-input">
            <TodoInput onClick={addTodo} />
          </div>
        </div>
        <div className="container__search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchBar(e.target.value)}
          />
        </div>
        <div className="container__todo-list">
          <div className="todo-list">
            <div className="btns-list-first">
              {FILTER_NAMES.map((name) => (
                <UpdateButtons
                  key={name}
                  name={name}
                  isPressed={name === filter}
                  setFilter={setFilter}
                />
              ))}
            </div>
            <div className="todo-item">
              {todos.length > 0 ? (
                <TodoItem
                  todos={todos}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                  completeTodo={completeTodo}
                  edit={edit}
                  handleEditChange={handleEditChange}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  FILTER_MAP={FILTER_MAP}
                  filter={filter}
                  searchBar={searchBar}
                  modalStyle={modalStyle}
                />
              ) : (
                <div className="empty">The List Is Empty</div>
              )}
            </div>
            <DeleteButtons
              todos={todos}
              setTodos={setTodos}
              modalStyle={modalStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
