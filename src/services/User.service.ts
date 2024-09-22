import bcrypt from 'bcrypt';
import UsersModel from '../database/models/UserModel';
import { validateLogin } from './validations/loginValidation';
import { ILogin, UserModel } from '../interfaces/ILogin';
import ErrorStatus from '../utils/errorStatus';

class UserService {
  public static async login(user: ILogin) {
    const { email, password } = user;
    validateLogin(user);
    const auth = await UsersModel.findOne({ where: { email }});
    if (!auth) throw new ErrorStatus(404, 'Invalid email or password');
    const isValid = bcrypt.compareSync(password, auth.password);
    if (!isValid) throw new ErrorStatus(404, 'Invalid email or password');
    return { email: auth.email, id: auth.id };
  }

  public static async createAccount(u: UserModel){
    const exist = await UsersModel.findOne({ where: { email: u.email }});
    if(exist){
      throw new ErrorStatus(409,'Email já cadastrado');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(u.password, salt);
    u.password = hash;
    const { email, id } = await UsersModel.create({email: u.email, password: hash});
    return { email, id };
  }
}

export default UserService;

