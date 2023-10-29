import Database from '../../database/datasource.connection';

import User from './user.entity';
import { Repository } from 'typeorm';

class UsersService {
  private repository: Repository<User>;
  constructor() {
    this.repository = Database.getInstance()
      .getDataSource()
      .getRepository(User);
  }

  public async createUser(user: any): Promise<any> {
    const newUser = this.repository.create(user);
    return await this.repository.save(newUser);
  }

  public async getUsers(): Promise<User[]> {
    return await this.repository.find();
  }

  public async getUser(id: any): Promise<User> {
    return await this.repository.findOne({
      relations: {
        userShifts: true,
      },
      where: { id },
    });
  }

  public async updateUser(id: any, user: any): Promise<any> {
    return await this.repository.update({ id }, user);
  }

  public async deleteUser(id: any): Promise<any> {
    return await this.repository.delete({ id });
  }
}

export default UsersService;
