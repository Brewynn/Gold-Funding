import nodemailer from 'nodemailer';
import { validator }  from '../../utils/universal/helperFunction';
import { STATUS } from '../../utils/universal/constant';
import { mapObject } from '../../utils/universal/helperFunction';

const response = {
  validations: [],
  message: 'SUCCESS',
  status: STATUS.OK,
};

/**
 * Send an email when the field are valid
 *
 * @param {Object} req
 * @param {Object} res
 *
 */
const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    },
  });

  const template = mapObject(req.body, ([name, value]) => `
    <div>
      <strong class="email__field">${name}:</strong>
      <span class="email__value">${value}</span>
    </div>
  `).join('');

  const info = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: 'This is email test ✔',
    text: 'Email test',
    html: `
      <div class="email__container">
        ${template}
      </div>
    `,
  };

  await transporter.sendMail(info, (error) => {
    if (error) {
      response.message = 'ERROR';
      response.status = STATUS.INTERNAL_SERVER_ERROR;
      res.status(STATUS.INTERNAL_SERVER_ERROR).json(response);
    } else {
      res.status(STATUS.OK).json(response);
    }
  });
};

/**
 * Check each field if are valid
 *
 * @param {Object} req
 * @return {Array}
 *
 */
const checkFields = (req) => {
  let canSendEmail = true;
  const validations = mapObject(req.body, ([field, value]) => {
    const isValid = validator(field, value);

    if (!isValid) {
      canSendEmail = isValid;
    }

    return [field, isValid];
  });

  return [canSendEmail, validations];
}

const email = (req, res) => {
  let [canSendEmail, validations] = checkFields(req);

  if (canSendEmail) {
    sendEmail(req, res);
  } else {
    response.message = 'IS_NOT_VALID';
    response.validations = validations;
    response.status = STATUS.CONFLICT;
    res.status(STATUS.CONFLICT).json(response);
  }
};

export default email;
