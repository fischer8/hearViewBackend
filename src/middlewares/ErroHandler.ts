import { NextFunction, Request, Response } from 'express';
import errorStatus from '../utils/errorStatus';

function errorHandler(err: errorStatus, _req: Request, res: Response, _next: NextFunction) {
  const { status, message: msg } = err;
  if (status) return res.status(status).json({ message: msg });
  if (err.message) {
    // return res.status(401).json({ message: 'Invalid token' });
    return res.status(401).json({ messageereee: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
}
export default errorHandler;

