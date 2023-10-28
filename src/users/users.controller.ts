import * as express from 'express';
import Controller from 'interfaces/controller.interface';
import validationMiddleware from 'middlewares/validation.middleware';
import CreateUserDto from './user.dto';

class UsersController implements Controller {
  public path = '/users';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(
      this.path,
      validationMiddleware(CreateUserDto),
      this.createAPost
    );
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    // response.send(this.posts);
  };

  createAPost = (request: express.Request, response: express.Response) => {
    // const post: Post = request.body;
    // this.posts.push(post);
    // response.send(post);
  };
}

export default UsersController;
