/* tslint:disable:no-console */
import webpack from 'webpack';
import webpackDevServer, { Configuration } from 'webpack-dev-server';
import config from './webpack.config';

if (process.env.NODE_ENV !== 'production') {
  const port = 8080;
  const host = '0.0.0.0';

  const devServerOptions: Configuration = {
    host,
    hot: true,
    open: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    port,
    stats: 'minimal',
  };
  webpackDevServer.addDevServerEntrypoints(config, devServerOptions);
  const compiler = webpack(config);
  const server = new webpackDevServer(compiler, devServerOptions);

  server.listen(port, host, () => {
    console.log(`Starting server on http://${host}:${port}`);
  });
} else {
  const compiler = webpack(config);
  compiler.run((err, status) => {
    if (err) {
      // Can use this to inform CI process that build has failed
      console.log(err);
    }
    console.log(status);
  });
}
