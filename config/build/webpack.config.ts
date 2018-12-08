import { Configuration } from 'webpack';
import path from 'path';
import babelOptions from './.babelrc';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config: Configuration = {
  mode,
  entry: path.resolve(process.cwd(), 'src', ''),
  output: {
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: 'babel-loader',
        options: babelOptions,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'config', 'build', 'template.html'),
    }),
  ],
};

export default config;
