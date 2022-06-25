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
  createTicketRouter,
  showTicketRouter,
  showListTicketRouter,
  updateTicketRouter,
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

app.use('/api/tickets', createTicketRouter);
app.use('/api/tickets', showListTicketRouter);
app.use('/api/tickets', showTicketRouter);
app.use('/api/tickets', updateTicketRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
