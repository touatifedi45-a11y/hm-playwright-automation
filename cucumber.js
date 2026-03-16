module.exports = {
  default: {
    require: ['support/world.js', 'steps/**/*.js'],
    publishQuiet: true,
    format: ['progress'],
    paths: ['features/**/*.feature'],
    worldParameters: {},
  },
};
