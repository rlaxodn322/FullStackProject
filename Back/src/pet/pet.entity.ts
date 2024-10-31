import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ default: 100 })
  happiness: number;

  @Column({ default: 100 })
  hunger: number;

  @Column({ default: 100 })
  energy: number;

  @Column({ default: 0 })
  level: number;

  @Column({ default: 0 })
  expreience: number;
}
