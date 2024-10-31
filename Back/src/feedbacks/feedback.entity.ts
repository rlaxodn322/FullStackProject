import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FeedBack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventId: number;
  @Column()
  userId: number;
  @Column()
  comment: string;
}
