import path from "path";

export default {
  entry: path.join(__dirname, "/client/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, "client"),
          path.join(__dirname, "server/utils")
        ],
        loaders: [ "babel-loader" ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ "*", ".js" ]
  }
};
