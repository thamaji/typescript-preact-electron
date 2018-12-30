const path = require('path');

var main = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dst')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'ts-loader',
      }
    ]
  }
};

var renderer = {
  mode: 'development',
  target: 'electron-renderer',
  entry: path.join(__dirname, 'src', 'renderer', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dst', 'scripts')
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.(tsx|ts)$/,
      use: [
        'ts-loader'
      ],
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
      ],
    }]
  },
};

module.exports = [
  main, renderer
];