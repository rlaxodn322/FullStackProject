import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  location: string;
  @Column()
  date: Date;
  @Column()
  category: string;
}
