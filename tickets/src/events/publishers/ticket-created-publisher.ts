import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@marschen-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
