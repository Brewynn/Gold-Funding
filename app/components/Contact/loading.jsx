import React from 'react';

const Loading = ({ show }) =>
  <>
    {
      (show ? (
        <picture className="contact__loading">
          <img
            className="contact__loading-image"
            src="../../asset/images/loading.gif"
          />
        </picture>
      ) : null)
    }
  </>

export default Loading;
