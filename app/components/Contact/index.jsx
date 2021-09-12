import React, { useState } from 'react';
import Container from './Style';
import Input from './Input';
import { inputData, infoData } from './data';
import Title from './Title';
import { validator } from '../../../utils/universal/helperFunction';
import { FIELD_CONTACT } from '../../../utils/universal/constant';
import Info from './Info';
import Message from './Message';

const Contact = ({ innerRef }) => {
  const message = 'This is not a valid';
  const [showMessage, setShowMessage] = useState({
    showMessage: false,
    text: ''
  });
  const [state, setState] = useState({
    name: {
      value: '',
      validation: {
        isValid: true,
        message: `${message} ${FIELD_CONTACT.NAME}.`,
        test: (value) => validator(FIELD_CONTACT.NAME, value),
        showError: false
      }
    },
    email: {
      value: '',
      validation: {
        isValid: true,
        message:  `${message} ${FIELD_CONTACT.EMAIL} address.`,
        test: (value) => validator(FIELD_CONTACT.EMAIL, value),
        showError: false
      }
    },
    phone: {
      value: '',
      validation: {
        isValid: true,
        message: `${message} ${FIELD_CONTACT.PHONE} number.`,
        test: (value) => validator(FIELD_CONTACT.PHONE, value),
        showError: false
      }
    },
    company: {
      value: '',
      validation: {
        isValid: true,
        message:  `${message} ${FIELD_CONTACT.COMPANY} name.`,
        test: (value) => validator(FIELD_CONTACT.COMPANY, value),
        showError: false
      }
    }
  });

  return (
    <Container>
      <div className="contact" ref={innerRef}>
        <div className="contact__form">
          <form className="contact__form-container">
            <Title title="get started" />
            <Input items={inputData(state, setState, setShowMessage)} />
          </form>
        </div>

        <div className="contact__info">
          <div className="contact__info-container">
            <Title title="contact us" />
            <Info items={infoData} />
          </div>
        </div>
      </div>
      {
        (showMessage.showMessage) ? (
          <Message
            text={showMessage.text}
            setState={setShowMessage}
          />
        ) : null
      }
    </Container>
  );
}

export default Contact;
