import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FIELD_CONTACT} from '../../../utils/universal/constant';
import {validator} from '../../../utils/universal/helperFunction';
import {inputData, infoData} from './data';
import Container from './Styles';
import Info from './Info';
import Input from './Input';
import Message from './Message';
import Title from './Title';
import Loading from './loading';

const Contact = ({innerRef}) => {
  const message = 'This is not a valid';
  const [showLoading, setShowLoading] = useState(false);
  const [showMessage, setShowMessage] = useState({
    showMessage: false,
    text: '',
  });
  const [fieldState, setFieldState] = useState({
    name: {
      value: '',
      validation: {
        isValid: true,
        message: `${message} ${FIELD_CONTACT.NAME}.`,
        showError: false,
        test: (value) => validator(FIELD_CONTACT.NAME, value),
      },
    },
    email: {
      value: '',
      validation: {
        isValid: true,
        message: `${message} ${FIELD_CONTACT.EMAIL} address.`,
        showError: false,
        test: (value) => validator(FIELD_CONTACT.EMAIL, value),
      },
    },
    phone: {
      value: '',
      validation: {
        isValid: true,
        message: `${message} ${FIELD_CONTACT.PHONE} number.`,
        showError: false,
        test: (value) => validator(FIELD_CONTACT.PHONE, value),
      },
    },
    company: {
      value: '',
      validation: {
        isValid: true,
        message: `${message} ${FIELD_CONTACT.COMPANY} name.`,
        showError: false,
        test: (value) => validator(FIELD_CONTACT.COMPANY, value),
      },
    },
  });

  return (
    <Container ref={innerRef}>
      <div className="contact">
        <div className="contact__section">
          <h1>contacts</h1>
        </div>

        <div className="contact__form">
          <form className="contact__form-container">
            <Title title="get started" subTitle="Write to us" />
            <Input items={
              inputData(
                  fieldState,
                  setFieldState,
                  setShowMessage,
                  setShowLoading,
              )
            } />
            <Loading isLoading={showLoading} />
          </form>
        </div>

        <div className="contact__info">
          <div className="contact__info-container">
            <Title title="contact us" subTitle="Our information" />
            <Info items={infoData} />
          </div>
        </div>

      </div>
      <Message
        state={showMessage}
        setState={setShowMessage}
      />
    </Container>
  );
};

Contact.propTypes = {
  innerRef: PropTypes.object.isRequired,
};

export default Contact;
