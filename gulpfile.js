const uswds = require('@uswds/compile');

uswds.settings.version = 3;
uswds.paths.src.projectSass = './assets/css';
uswds.paths.dist.theme = './assets/css';
uswds.paths.dist.css = './assets/css';

exports.compile = uswds.compile;
exports.watch = uswds.watch;

