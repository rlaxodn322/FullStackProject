import { Event } from 'src/events/event.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.id)
  event: Event;

  @Column()
  userId: number;

  @Column()
  reservationDate: Date;
}
