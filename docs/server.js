const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');
const logger = require('express-logger');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // Run webpack middleware only in dev environment
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  // Use build folder for serving static assets in prod environment
  app.use(express.static('build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(logger({ path: `./log/${process.env.NODE_ENV}.log` }));

app.listen(8001, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://0.0.0.0:8001');
});
