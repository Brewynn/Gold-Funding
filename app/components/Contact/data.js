import res from '../../../utils/client/res';
import { mapObject, forEachSetState  } from '../../../utils/universal/helperFunction';

const classNameInputText = 'contact__input-text';
const classNameInputButton = 'contact__input-button';

/**
 * returns all data of the inputs
 *
 * @param {Object} state
 * @param {Function} setState
 * 
 * @return {Array}
 *
 */
const inputData = (state, setState, messageState) => [
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setState({ ...state, name: { ...state.name, value } }),
    placeholder: 'name',
    type: 'text',
    value: state.name.value,
    name: 'name',
    validation: {
      isValid: state.name.validation.isValid,
      message: state.name.validation.message,
      test: state.name.validation.test,
      showError: state.name.validation.showError,
    },
  },
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setState({ ...state, email: { ...state.email, value } }),
    name: 'email',
    placeholder: 'email',
    type: 'email',
    value: state.email.value,
    validation: {
      isValid: state.email.validation.isValid,
      message: state.email.validation.message,
      test: state.email.validation.test,
      showError: state.email.validation.showError,
    },
  },
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setState({ ...state, phone: { ...state.phone, value } }),
    placeholder: 'phone number',
    type: 'text',
    value: state.phone.value,
    name: 'phone',
    validation: {
      isValid: state.phone.validation.isValid,
      message: state.phone.validation.message,
      test: state.phone.validation.test,
      showError: state.phone.validation.showError,
    },
  },
  {
    className: classNameInputText,
    onchange: ({ target: { value } }) =>
      setState({ ...state, company: { ...state.company, value } }),
    name: 'company',
    placeholder: 'company',
    type: 'text',
    value: state.company.value,
    validation: {
      isValid: state.company.validation.isValid,
      message: state.company.validation.message,
      test: state.company.validation.test,
      showError: state.company.validation.showError,
    },
  },
  {
    className: classNameInputButton,
    onclick: async () => {
      const validations = mapObject(state, ([key]) => {
        const { validation: { test }, value } = state[key];
        const isValid = test(value);

        setState((state) => {
          const newState = { ...state };

          newState[key].validation.isValid = isValid;
          return newState;
        });

        return isValid;
      });
      const canSendEmail = !validations.includes(false);

      if (canSendEmail) {
        const { message, validations } = await res.post('api/v1/email', {
          name: state.name.value,
          email: state.email.value,
          phone: state.phone.value,
          company: state.company.value,
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
            (function cleanFields() {
              forEachSetState(setState, ([key], newState) => {
                newState[key].value = '';
                return newState;
              });
            })();
            showMessage(
              'Your message has been sent successfully.'
            );
            break;

          case 'ERROR':
            showMessage(
              'We could not send your message, please try again later.'
            );
            break;

          case 'UNAUTHORIZED':
            showMessage(
              'You are not authorized to send this message.'
            );
            break;

          case 'IS_NOT_VALID':
            (function showError() {
              forEachSetState(setState, ([, , index], newState) => {
                const [key, isValid] = validations[index];

                newState[key].validation.showError = !isValid;
                return newState;
              });
            })();
            break;

          default:
            break;
        }
      }
    },
    type: 'button',
    value: 'send',
  },
];

const infoData = [
  {
    title: 'Direct line',
    subTitle: '+1 941-313-3099',
  },
  {
    title: 'Email:',
    subTitle: 'info@goldenfundingsg.com'
  },
];

export { inputData, infoData };
