#!/usr/bin/env node

import App from './app';
import 'express-async-errors';
import 'dotenv/config'

const PORT = process.env.APP_PORT || 5050;
new App().start(Number(PORT));

