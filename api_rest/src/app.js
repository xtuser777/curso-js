import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database/index';

import express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';

import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import foto from './routes/foto';

const whiteList = [
  'https://react2.otaviomiranda.com.br',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(Cors(corsOptions));
    this.app.use(Helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users', user);
    this.app.use('/tokens', token);
    this.app.use('/alunos', aluno);
    this.app.use('/fotos', foto);
  }
}

export default new App().app;
