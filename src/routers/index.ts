import express from 'express';
import loginRouter from './login.router';
import tagRouter from './tag.router';
import versionRouter from './version.router';

const router = express.Router();

router.use(loginRouter);
router.use(tagRouter);
router.use(versionRouter);

export default router;

