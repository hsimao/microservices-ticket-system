import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors';
import cookieSession from 'cookie-session';
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use('/api/users', currentUserRouter);
app.use('/api/users', signinRouter);
app.use('/api/users', signoutRouter);
app.use('/api/users', signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
