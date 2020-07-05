import { validationResult } from 'express-validator';
import Response from '../helpers/Response';
import HttpStatus from 'http-status-codes';

const inputError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.errors.map((err) => err.msg);
    return Response.errorMessage(res, errorMessage, HttpStatus.BAD_REQUEST);
  }
  return next();
};

export default inputError;
