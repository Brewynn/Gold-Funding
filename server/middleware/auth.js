import { STATUS } from '../../utils/universal/constant';

const auth = (req, res, next) => {
  if (req.headers.authorization !== process.env.AUTHORIZATION) {
    res.status(STATUS.UNAUTHORIZED).json({
      response: {
        message: 'UNAUTHORIZED',
        status: STATUS.UNAUTHORIZED,
      },
    });

    return;
  }

  next();
};

export default auth;
