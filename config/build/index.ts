import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const compiler = webpack(config);

if (process.env.NODE_ENV !== 'production') {
  const devServerOptions = {
    stats: {
      colors: true,
    },
  };
  const server = new webpackDevServer(compiler, devServerOptions);

  server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
  });
} else {
  compiler.run((err, status) => {
    if (err) {
      // Can use this to inform CI process that build has failed
      console.log(err);
    }
    console.log(status);
  });
}
