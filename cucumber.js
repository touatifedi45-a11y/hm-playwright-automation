module.exports = {
  default: {
    require: ['support/world.js', 'steps/**/*.js','step-definitions/',],
    publishQuiet: true,
    format: ['progress-bar'],
    paths: ['features/**/*.feature'],
    worldParameters: {},
  },
};
