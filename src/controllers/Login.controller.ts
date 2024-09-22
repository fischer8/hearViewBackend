import { Response, Request } from 'express';
import LoginService from '../services/Login.service';

class LoginController {
  public static async login(req: Request, res: Response) {
    const token = await LoginService.login(req.body);
    return res.status(200).json(token);
  }

  public static async createAccount(req: Request, res: Response) {
    const token = await LoginService.createAccount(req.body);
    return res.status(201).json(token)
  }
}

export default LoginController;

