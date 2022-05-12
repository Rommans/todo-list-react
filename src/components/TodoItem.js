import React, { useState } from "react";
import ReactModal from "react-modal";

function TodoItem(props) {
  const {
    todos,
    completeTodo,
    removeTodo,
    editTodo,
    edit,
    handleEditChange,
    inputValue,
    setInputValue,
    FILTER_MAP,
    filter,
    searchBar,
    modalStyle,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [clickedTodo, setClickedTodo] = useState("");

  const handleOpenModal = (id) => {
    setClickedTodo(id);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  const handleDeleteTodo = () => {
    filterTasksSearch.forEach((todo) => {
      if (clickedTodo === todo.id) {
        removeTodo(todo.id);
      }
    });
    handleCloseModal();
  };

  const filterTasks = todos.filter(FILTER_MAP[filter]);
  const filterTasksSearch = filterTasks.filter((value) => {
    if (searchBar === "") {
      return value;
    } else if (value.text.toLowerCase().includes(searchBar.toLowerCase())) {
      return value;
    }
  });

  const Item = filterTasksSearch.map((todo, index) => (
    <div className="item" key={todo.id}>
      {edit === todo.id ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <p className={todo.complete ? "complete" : ""}>
          <span>{index + 1}.</span> {todo.text}
        </p>
      )}
      {edit === todo.id ? (
        <button onClick={() => editTodo(todo.id, inputValue)}>Edit todo</button>
      ) : (
        <div className="edit-items">
          <input
            key={todo.id}
            defaultChecked={todo.completed ? true : false}
            onClick={() => completeTodo(todo.id)}
            type="checkbox"
          />
          <i
            className="fas fa-pen editTodo"
            onClick={() => handleEditChange(todo.id, todo.text)}></i>
          <i
            className="fas fa-trash removeTodo"
            onClick={() => handleOpenModal(todo.id)}></i>
        </div>
      )}
    </div>
  ));

  return (
    <React.Fragment>
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        style={modalStyle}>
        <h3>Are you sure you want to delete?</h3>
        <div className="modal__buttons">
          <button onClick={handleDeleteTodo}>Delete</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      </ReactModal>
      <div className="counter">
        {Item.length} {Item.length >= 2 ? "tasks left" : "task left"}
      </div>
      {Item}
    </React.Fragment>
  );
}

export default TodoItem;
