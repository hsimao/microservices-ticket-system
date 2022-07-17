import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@marschen-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
