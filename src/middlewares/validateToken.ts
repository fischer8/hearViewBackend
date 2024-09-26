import { Request, Response, NextFunction } from "express"
import { validateToken } from "../auth/JWT" 

const validate = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.body?.token;
  const data = validateToken(token)
  req.body.id = data.id;
  console.log('validatetoken.ts ------ id: -----', data.id)
  next()
}

export default validate;
