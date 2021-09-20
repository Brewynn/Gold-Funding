import React from 'react';
import PropTypes from 'prop-types';

const Message = ({state, setState}) => (
  <>
    {
      (state.showMessage) ? (
        <div className="contact__message">
          <span className="contact__message-title">
            {state.text}
          </span>
          <button
            className="contact__message-button"
            onClick={() =>
              setState((state) => {
                const newState = {...state};

                newState.showMessage = false;
                return newState;
              })}
          >
            undo
          </button>
        </div>
      ) : null
    }
  </>
);

Message.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default Message;
