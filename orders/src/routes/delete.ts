import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from '@marschen-tickets/common';
import { Order, OrderStatus } from '../models/order';

const router = express.Router();

router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  const { id } = req.params;

  const order = await Order.findById(id);

  if (!order) {
    throw new NotFoundError();
  }

  if (order.userId !== req.currentUser!.id) {
    throw new NotAuthorizedError();
  }

  order.status = OrderStatus.Cancelled;
  await order.save();

  res.status(204).send(order);
});

export default router;
