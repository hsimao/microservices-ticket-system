import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@marschen-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
