import { Router } from "express"
import TagController from "../controllers/Tag.controller"
import validate from "../middlewares/validateToken";

const tagRouter = Router();


tagRouter.post('/tag', validate, TagController.tagEdit);

export default tagRouter;



