import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@marschen-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
