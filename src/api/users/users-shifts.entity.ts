import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';
import Shift from '../../api/shifts/shift.entity';

@Entity()
class UserShifts {
  @PrimaryGeneratedColumn()
  public postToCategoryId: number;

  @Column()
  public userId: number;

  @Column()
  public shiftId: number;

  @Column()
  public status: string;

  @ManyToOne(() => User, (user) => user.userShifts)
  public user: User;

  @ManyToOne(() => Shift, (shift) => shift.userShifts)
  public shift: Shift;
}

export default UserShifts;
