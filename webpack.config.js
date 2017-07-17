module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist/',
    filename: "app.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader'
      } 
    ]
  }
}