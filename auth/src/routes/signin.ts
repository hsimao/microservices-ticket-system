import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post(
  '/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('You must suppy a password'),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.send('Hi there!');
  }
);

export default router;
