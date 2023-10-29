import User from './user.entity';
import { Repository } from 'typeorm';

class UsersService extends Repository<User> {}

export default UsersService;
