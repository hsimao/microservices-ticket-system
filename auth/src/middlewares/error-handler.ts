import { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError, RequestValidationError } from '../errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
    return res.status(400).send({ errors: formattedErrors });
  }

  if (err instanceof DatabaseConnectionError) {
    return res.status(500).send({ errors: [{ meeeage: err.reason }] });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
