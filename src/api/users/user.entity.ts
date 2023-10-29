import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserShifts from './users-shifts.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({
    unique: true,
  })
  public username: string;

  @Column({
    unique: true,
  })
  public email: string;

  @Column()
  public address: string;

  @OneToMany(() => UserShifts, (userShifts) => userShifts.user)
  public userShifts: UserShifts[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
