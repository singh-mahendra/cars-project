const config = {
    babelrc: false,
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ]
  };
  module.exports = require("babel-jest").createTransformer(config);