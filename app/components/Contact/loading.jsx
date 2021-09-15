import React from 'react';

const Loading = ({ isLoading }) =>
  <>
    {
      (isLoading ? (
        <picture className="contact__loading">
          <img
            className="contact__loading-image"
            src="../../asset/images/loading2.gif"
          />
        </picture>
      ) : null)
    }
  </>

export default Loading;
