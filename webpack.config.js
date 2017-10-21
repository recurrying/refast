var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist',
    filename: 'index.js',
    library: 'refast',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: __dirname + '/src'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      var: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
