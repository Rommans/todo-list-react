import React, { useState } from "react";
import ReactModal from "react-modal";

function DeleteButtons(props) {
  const { todos, setTodos, modalStyle } = props;

  const [showModal, setShowModal] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  const deleteAllTodo = () => {
    setTodos([]);
  };

  const deleteDoneTodo = () => {
    const removedItem = [...todos].filter((todo) => !todo.completed);
    setTodos(removedItem);
  };

  const handleOpenModal = (event) => {
    setClickedButton(event.target.id)
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  const handleDeleteButtons = () => {
    if (clickedButton === "doneTasks") {
      deleteDoneTodo();
    }
    else if (clickedButton === "allTasks") {
      deleteAllTodo();
    }
    handleCloseModal();
  }

  return (
    <div className="btns-list-second">
      <ReactModal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        style={modalStyle}>
        <h3>Are you sure you want to delete?</h3>
        <div className="modal__buttons">
          <button onClick={handleDeleteButtons}>Delete</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </div>
      </ReactModal>
      <button id="doneTasks" onClick={handleOpenModal}>Delete done tasks</button>
      <button id="allTasks" onClick={handleOpenModal}>Delete all tasks</button>
    </div>
  );
}

export default DeleteButtons;
