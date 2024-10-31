import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ default: 0 })
  happiness: number;

  @Column({ default: 0 })
  humger: number;

  @Column({ default: 0 })
  energy: number;
}
