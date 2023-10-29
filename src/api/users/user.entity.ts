import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default User;
