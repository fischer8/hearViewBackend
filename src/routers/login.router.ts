import { Router } from "express"
import { validateLogin, validateNewAccount } from "../middlewares/validateLogin";
import LoginController from "../controllers/Login.controller";

const loginRouter = Router();


loginRouter.get('/',(req, res)=>{
  return res.status(200).json('oi')
})
loginRouter.post('/login', validateLogin, LoginController.login);
loginRouter.post('/create-account', validateLogin, validateNewAccount, LoginController.createAccount)


export default loginRouter;

