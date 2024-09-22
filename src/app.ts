#!/usr/bin/env node

import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routers/';
import errorHandler from './middlewares/ErroHandler';
import bodyParser from 'body-parser';
import 'dotenv/config'

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false })); 
    this.app.use(router);
    this.app.use(errorHandler);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

