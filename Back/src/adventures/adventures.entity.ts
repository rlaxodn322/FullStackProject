import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Adventure {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  location: string;
  @Column('int')
  duration: number;
  @Column('simple-array')
  requirements: string[];
  @Column()
  theme: string;
}

@Entity()
export class AdventurePreferences {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column('simple-array')
  interests: string[];
  @Column()
  preferredLocation: string;
}
