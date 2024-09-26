import { Request, Response, NextFunction } from 'express';
import ErrorStatus from '../utils/errorStatus';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ErrorStatus(400, 'All fields must be filled');
  next();
};

export default validateLogin;

