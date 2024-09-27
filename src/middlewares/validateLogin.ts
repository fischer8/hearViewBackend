import { Request, Response, NextFunction } from 'express';
import ErrorStatus from '../utils/errorStatus';
import { validateAccount } from '../services/validations/loginValidation';

export const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ErrorStatus(400, 'All fields must be filled');
  next();
};

export const validateNewAccount = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ErrorStatus(400, 'All fields must be filled');
  validateAccount(req.body)

  next();
};


