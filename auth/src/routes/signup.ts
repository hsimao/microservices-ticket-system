import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new Error('Invalid email or password');
      return res.status(400).send(errors.array());
    }
    const { email, password } = req.body;

    throw new Error('Error connecting to database');

    console.log('creating a user...');
    res.send({});
  }
);

export default router;
