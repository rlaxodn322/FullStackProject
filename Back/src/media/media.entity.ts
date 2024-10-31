import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  genre: string;
  @Column()
  description: string;
  @Column()
  rating: number;
}
