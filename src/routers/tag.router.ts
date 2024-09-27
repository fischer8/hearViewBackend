import { Router } from "express"
import TagController from "../controllers/Tag.controller"
import validate from "../middlewares/validateToken";

const tagRouter = Router();


tagRouter.post('/insert', validate, TagController.insert);
tagRouter.get('/get-tag', validate, TagController.getAll);
tagRouter.get('/get-version', validate, TagController.getVersion);

export default tagRouter;



