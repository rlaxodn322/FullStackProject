import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  quizzesTaken: number;

  @Column()
  correctAnswers: number;

  @Column()
  level: number;
}
