module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  presets: ["@babel/preset-env", "@babel/preset-react"],
  transformIgnorePatterns: ["/node_modules/(?!(node-fetch))/"],
};
