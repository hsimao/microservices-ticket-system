import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from '@marschen-tickets/common';
import cookieSession from 'cookie-session';
import {
  createOrderRouter,
  showOrderRouter,
  showListOrderRouter,
  deleteOrderRouter,
} from './routes';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);

app.use('/api/orders', createOrderRouter);
app.use('/api/orders', showListOrderRouter);
app.use('/api/orders', showOrderRouter);
app.use('/api/orders', deleteOrderRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
