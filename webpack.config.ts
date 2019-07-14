import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const { env } = process;

export const config: webpack.Configuration = {
  mode: env.NODE_ENV === 'development' ? 'development' : 'production',
  target: 'node',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  plugins: [new webpack.HotModuleReplacementPlugin()],
  entry: {
    // server: './src/server/index.ts',
    client: './src/client/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  externals: [
    // nodeExternals(), {
    //   react: 'React',
    //   'react-dom': 'ReactDOM'
    // }
  ],
};
