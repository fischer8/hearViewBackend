import { Request, Response, NextFunction } from "express"
import { validateToken } from "../auth/JWT" 


const validate = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.body?.token;
  console.log(token.value ,' aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  const data = validateToken(token.value)
  console.log('dataaaaa', data)
  req.body.id = data.id;
  console.log('validatetoken.ts ------ id: -----', data.id)
  next()
}

export default validate;
