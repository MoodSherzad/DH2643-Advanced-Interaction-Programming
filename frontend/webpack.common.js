const path = require("path");

const loaders = [];
loaders.push({
    test: /\.jsx?$/,
    exclude: '/node_modules',
    use: 'babel-loader'
})

loaders.push({
  test: /\.(ts|tsx)$/,
  loader: "ts-loader",
  exclude: /node_modules/,
  options: {
    configFile: "tsconfig.client.json",
  },
})

loaders.push({
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
})

loaders.push({
  test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
})


;

module.exports = {
  entry: {
    app: "./src/App.tsx",
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss"],
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(path.resolve(), "../dist"),
  },
};
