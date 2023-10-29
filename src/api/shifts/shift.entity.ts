import { UserShifts } from '../../api/users/users-shifts.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Shift {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column({ type: 'time' })
  public startTime: string;

  @Column({ type: 'time' })
  public endTime: string;

  @OneToMany(() => UserShifts, (userShifts) => userShifts.shift)
  public userShifts: UserShifts[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Shift;
