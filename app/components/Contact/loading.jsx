import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({isLoading}) =>
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
  </>;

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
