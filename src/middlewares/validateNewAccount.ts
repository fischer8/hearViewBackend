import { validateAccount } from '../services/validations/loginValidation';
import { NextFunction, Request, Response } from 'express';

export default function validateNewAccount(req: Request,_res: Response, next: NextFunction) {
  validateAccount(req.body);
  next()
}

