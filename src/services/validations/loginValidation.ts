import Joi from 'joi';
import { ILogin, UserModel } from '../../interfaces/ILogin';
import ErrorStatus from '../../utils/errorStatus';

const loginSchema = Joi.object<ILogin>({
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
});

const accountSchema = Joi.object<UserModel>({
  email: Joi.string().email().required().label('email'),
  password: Joi.string().min(6).required().label('password'),
})

export function validateLogin(user: ILogin) {
  const { error } = loginSchema.validate(user);
  if(error){
    throw new ErrorStatus(400, error.message);
  }
}

export function validateAccount(user: UserModel){
  const { error } = accountSchema.validate(user);
  if(error){
    throw new ErrorStatus(400, error.message);
  }
}

