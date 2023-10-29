import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Shift {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @Column({ type: 'time' })
  public startTime: string;

  @Column({ type: 'time' })
  public endTime: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Shift;
