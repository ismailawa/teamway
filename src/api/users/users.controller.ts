import * as express from 'express';

import CreateUserDto from './user.dto';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middlewares/validation.middleware';
import UsersService from './users.service';
import HttpException from '../../exceptions/http.exception';

class UsersController implements Controller {
  public path = '/users';
  public router = express.Router();
  private userService: UsersService;

  constructor() {
    this.intializeRoutes();
    this.userService = new UsersService();
  }

  public intializeRoutes() {
    this.router.post(
      this.path,
      validationMiddleware(CreateUserDto),
      this.createUser
    );
    this.router.get(this.path, this.getAllUsers);
    this.router.get(`${this.path}/:id`, this.getUser);
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware(CreateUserDto),
      this.updateUser
    );
    this.router.delete(`${this.path}/:id`, this.deleteUser);
  }

  createUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.userService.createUser(req.body);
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  getAllUsers = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.userService.getUsers();
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  getUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.userService.getUser(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  updateUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.userService.updateUser(
        req.params.id,
        req.body
      );
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  deleteUser = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.userService.deleteUser(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };
}

export default UsersController;
