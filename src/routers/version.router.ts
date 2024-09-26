import { Router } from "express"
import TagController from "../controllers/Tag.controller"
import validate from "../middlewares/validateToken";

const versionRouter = Router();


versionRouter.get('/get-version', validate, TagController.getVersion);

export default versionRouter;



