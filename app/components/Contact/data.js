import res from '../../../utils/client/res';
import { mapObject } from '../../../utils/universal/helperFunction';
import { forEachSetState } from '../../../utils/client/helperFunctions';

const classNameInputText = 'contact__input-text';
const classNameInputButton = 'contact__input-button';

/**
 * returns all data of the inputs
 *
 * @param {Object} fieldState
 * @param {Function} setFieldState
 * @param {Object} messageState
 * @param {Function} setShowLoading
 * 
 * @return {Array}
 *
 */
const inputData = (
  fieldState, setFieldState,
  messageState, setShowLoading
) => [
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setFieldState({ ...fieldState, name: { ...fieldState.name, value } }),
    placeholder: 'Your name',
    type: 'text',
    value: fieldState.name.value,
    name: 'name',
    validation: {
      isValid: fieldState.name.validation.isValid,
      message: fieldState.name.validation.message,
      test: fieldState.name.validation.test,
      showError: fieldState.name.validation.showError,
    },
  },
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setFieldState({ ...fieldState, email: { ...fieldState.email, value } }),
    name: 'email',
    placeholder: 'E-mail',
    type: 'email',
    value: fieldState.email.value,
    validation: {
      isValid: fieldState.email.validation.isValid,
      message: fieldState.email.validation.message,
      test: fieldState.email.validation.test,
      showError: fieldState.email.validation.showError,
    },
  },
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setFieldState({ ...fieldState, phone: { ...fieldState.phone, value } }),
    placeholder: 'Your phone number',
    type: 'text',
    value: fieldState.phone.value,
    name: 'phone',
    validation: {
      isValid: fieldState.phone.validation.isValid,
      message: fieldState.phone.validation.message,
      test: fieldState.phone.validation.test,
      showError: fieldState.phone.validation.showError,
    },
  },
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setFieldState({ ...fieldState, company: { ...fieldState.company, value } }),
    name: 'company',
    placeholder: 'Your company',
    type: 'text',
    value: fieldState.company.value,
    validation: {
      isValid: fieldState.company.validation.isValid,
      message: fieldState.company.validation.message,
      test: fieldState.company.validation.test,
      showError: fieldState.company.validation.showError,
    },
  },
  {
    className: classNameInputButton,
    onclick: async () => {
      const validators = mapObject(fieldState, ([key]) => {
        const { validation: { test }, value } = fieldState[key];
        const isValid = test(value);

        setFieldState((state) => {
          const newState = { ...state };

          newState[key].validation.isValid = isValid;
          return newState;
        });

        return isValid;
      });
      const canSendMessage = !validators.includes(false);

      if (canSendMessage) {
        setShowLoading(true);

        const { message, validations } = await res.post('api/v1/email', {
          name: fieldState.name.value,
          email: fieldState.email.value,
          phone: fieldState.phone.value,
          company: fieldState.company.value,
        });
        const showMessage = (text) => {
          messageState((state) => {
            const newState = { ...state };

            newState.text = text;
            newState.showMessage = true;
            return newState;
          });
        };

        switch (message) {
          case 'SUCCESS':
            // Clean all the fields
            forEachSetState(setFieldState, ([key], newState) => {
              newState[key].value = '';
              return newState;
            });
            showMessage(
              'Your message has been sent successfully.'
            );
            break;

          case 'ERROR':
            showMessage(
              'We couldn\'t send your message, please try again later.'
            );
            break;

          case 'UNAUTHORIZED':
            showMessage(
              'You are not authorized to send this message.'
            );
            break;

          case 'IS_NOT_VALID':
            // Show an error message
            forEachSetState(setState, ([,, index], newState) => {
              const [key, isValid] = validations[index];

              newState[key].validation.showError = !isValid;
              return newState;
            });
            break;

          default:
            break;
        }

        setShowLoading(false);
      }
    },
    type: 'button',
    value: 'Send',
  },
];

const infoData = [
  {
    info: '+1 941-313-3099',
    icon: 'fa fa-phone',
  },
  {
    info: 'info@goldenfundingsg.com',
    icon: 'fa fa-envelope',
  },
];

export {
  inputData,
  infoData
};
