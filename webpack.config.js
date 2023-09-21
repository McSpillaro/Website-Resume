module.exports = {
  entry: './src/index.js',
  output: {
    filename: './src/dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
