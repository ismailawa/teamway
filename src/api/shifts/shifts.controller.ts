import * as express from 'express';

import CreateShiftDto from './shift.entity';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middlewares/validation.middleware';
import ShiftsService from './shifts.service';
import HttpException from '../../exceptions/http.exception';

class UsersController implements Controller {
  public path = '/shifts';
  public router = express.Router();
  private shiftsService: ShiftsService;

  constructor() {
    this.intializeRoutes();
    this.shiftsService = new ShiftsService();
  }

  public intializeRoutes() {
    this.router.post(
      this.path,
      validationMiddleware(CreateShiftDto),
      this.createShift
    );
    this.router.get(this.path, this.getAllShifts);
    this.router.get(`${this.path}/:id`, this.getShift);
    this.router.put(
      `${this.path}/:id`,
      validationMiddleware(CreateShiftDto),
      this.updateShift
    );
    this.router.patch(`${this.path}/:id`, this.assignShift);
    this.router.delete(`${this.path}/:id`, this.deleteShift);
  }

  createShift = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.shiftsService.createShift(req.body);
      res.status(201).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  getAllShifts = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.shiftsService.getShifts();
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  getShift = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.shiftsService.getShift(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  updateShift = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.shiftsService.updateShift(
        req.params.id,
        req.body
      );
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  deleteShift = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.shiftsService.deleteShift(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };

  assignShift = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const response = await this.shiftsService.assignShift(
        req.params.id,
        req.body.userId
      );
      res.status(200).json(response);
    } catch (error) {
      next(new HttpException(500, error.massege));
    }
  };
}

export default UsersController;
