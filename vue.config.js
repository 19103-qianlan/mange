const path = require('path');

const resolve = src => path.join(__dirname, src);

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  lintOnSave: isDev ? 'error' : false,
  devServer: {
    host: '0.0.0.0',
    port: 8001
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('pages', resolve('./src/pages'))
      .set('comps', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('layouts', resolve('./src/layouts'))
      .set('static', resolve('./src/static'));
  }
};
