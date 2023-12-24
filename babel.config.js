module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  globals: ["ts-jest"[["babelConfig", true]]],
};
