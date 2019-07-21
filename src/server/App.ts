import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';

import { Counter } from '../containers/Counter';
import { html } from './html';
import { config } from '../../webpack.config';

class ExpressApp {
  express: express.Express;

  constructor() {
    this.express = express();
    this.mountMiddleware();
    this.mountRoutes();
  }

  private mountMiddleware(): void {
    console.log('mounting middleware...');
    const compiler = webpack(config);
    this.express.use(
      middleware(compiler, {
        publicPath: '/',
      })
    );
    this.express.use(require('webpack-hot-middleware')(compiler));
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.use(express.static('dist'));
    router.get('/', (req, res) => {
      const body = renderToString(React.createElement(Counter));
      res.send(html({ body }));
    });
    this.express.use('/', router);
    this.express.use('/api', this.mountApis());
  }

  private mountApis(): express.Router {
    const router = express.Router();
    router.get('/hello', (req, res) => {
      res.json({
        message: 'Hello World!1',
      });
    });
    return router;
  }
}

export const App = new ExpressApp().express;
