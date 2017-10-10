const wallabyWebpack = require('wallaby-webpack');
const wallabyPostprocessor = wallabyWebpack({});

module.exports = function () {
  return {
    files: [
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.tsx', load: false},
      {pattern: 'src/**/*.test.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*.test.ts', load: false}
    ],

    postprocessor: wallabyPostprocessor,

    testFramework: 'mocha',

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
