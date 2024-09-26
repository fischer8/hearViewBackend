import { ILogin } from '../interfaces/ILogin';
import UserService from './User.service';
import { generateToken } from '../auth/JWT';
import { UserModel } from '../interfaces/ILogin';


class LoginService {
  public static async login(user: ILogin) {
    const userData = await UserService.login(user);
    const auth = generateToken(userData);
    return { token: auth, id: userData.id };
  }
  public static async createAccount(user: UserModel) {
    const userData = await UserService.createAccount(user);
    const auth = generateToken(userData);
    return { token: auth, id: userData.id };
  }
}

export default LoginService;

