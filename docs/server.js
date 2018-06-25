const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');
const logger = require('express-logger');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(logger({ path: `./log/${process.env.NODE_ENV}.log` }));

// Run webpack middleware only in dev environment
if (process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(8001, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:8001');
});
