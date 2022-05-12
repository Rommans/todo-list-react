import React from "react";

const UpdateButtons = (props) => {
  const { isPressed, setFilter, name } = props;

  return (
    <button
      type="button"
      className={isPressed ? "active" : ""}
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}>
      {name}
    </button>
  );
};

export default UpdateButtons;
