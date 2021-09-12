import React from 'react';

const Message = ({ text, setState }) => (
  <div className="contact__message">
    <span className="contact__message-title">{text}</span>
    <button
      className="contact__message-button"
      onClick={() =>
        setState((state) => {
          const newState = { ...state };

          newState.showMessage = false;
          return newState;
        })}
    >
      undo
    </button>
  </div>
);

export default Message;
