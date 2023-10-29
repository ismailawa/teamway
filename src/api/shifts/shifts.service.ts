import Database from '../../database/datasource.connection';

import Shift from './shift.entity';
import { Repository } from 'typeorm';

class ShiftsService {
  private repository: Repository<Shift>;
  constructor() {
    this.repository = Database.getInstance()
      .getDataSource()
      .getRepository(Shift);
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
    return await this.repository.delete({ id });
  }
}

export default ShiftsService;
