import User from 'api/users/user.entity';
import Database from '../../database/datasource.connection';

import Shift from './shift.entity';
import { Repository } from 'typeorm';
import UserShifts from 'api/users/users-shifts.entity';
import HttpException from 'exceptions/http.exception';

class ShiftsService {
  private repository: Repository<Shift>;
  private userRepository: Repository<User>;
  private userShiftsRepository: Repository<UserShifts>;
  constructor() {
    this.repository = Database.getInstance()
      .getDataSource()
      .getRepository(Shift);
    this.userRepository = Database.getInstance()
      .getDataSource()
      .getRepository(User);
    this.userShiftsRepository = Database.getInstance()
      .getDataSource()
      .getRepository(UserShifts);
  }

  public async createShift(shift: any): Promise<Shift[]> {
    const newShift = this.repository.create(shift);
    return await this.repository.save(newShift);
  }

  public async getShifts(): Promise<Shift[]> {
    return await this.repository.find();
  }

  public async getShift(id: any): Promise<Shift> {
    return await this.repository.findOneBy({ id });
  }

  public async updateShift(id: any, shift: any): Promise<any> {
    return await this.repository.update({ id }, shift);
  }

  public async deleteShift(id: any): Promise<any> {
    return await this.repository.delete({ id });
  }

  public async assignShift(id: any, userId: any): Promise<any> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new HttpException(404, 'User not found');
    }

    const shift = await this.repository.findOneBy({ id: id });

    if (!shift) {
      throw new HttpException(404, 'Shift not found');
    }

    const userShifts = this.userShiftsRepository.create();
    userShifts.user = user;
    userShifts.shift = shift;
    return await this.userShiftsRepository.save(userShifts);
  }
}

export default ShiftsService;
