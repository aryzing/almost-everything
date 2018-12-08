import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { Configuration } from 'webpack';

import babelOptions from './.babelrc';

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config: Configuration = {
  entry: path.resolve(process.cwd(), 'src', ''),
  mode,
  module: {
    rules: [
      {
        include: path.resolve(process.cwd(), 'src'),
        loader: 'babel-loader',
        options: babelOptions,
        test: /\.tsx?$/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'config', 'build', 'template.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json'],
  },
};

export default config;
