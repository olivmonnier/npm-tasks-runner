var execSync = require('child_process').execSync;
var fs = require('fs');

function readConfig () {
  var fileJson = fs.readFileSync(process.cwd() + '/package.json', 'utf-8');
  var parseFile = JSON.parse(fileJson);

  if (parseFile.hasOwnProperty('tasks')) {
    return parseFile.tasks;
  } else {
    var error = new Error('You have no declare tasks in your config file.');

    console.log(error);
    console.log(error.stack);
  }
}

function loopRunTasks (config, env) {
  if (!config.hasOwnProperty(env)) {
    var error = new Error('The environment ' + env + ' doesn\'t exist');

    console.log(error);
    console.log(error.stack);
    return;
  }

  console.log('/**** ' + env.toUpperCase() + ' ****/ \n\n');
  console.time('Total');
  config[env].forEach(function(task) {
    runTask(task);
  });
  console.timeEnd('Total');
}

function runTask (task) {
  if (typeof task === 'string') {
    console.time('> ' + task);
    execSync(task);
    console.timeEnd('> ' + task);
  } else {
    var cmd = task.name + ' '  + (task.src || '') + ' ' + (task.dest || '') + ' ' + (task.options || '');
    console.time('> ' + cmd);
    execSync(cmd);
    console.timeEnd('> ' + cmd);
  }
  console.log('\n');
}

module.exports = {
  readConfig: readConfig,
  loopRunTasks: loopRunTasks,
  runTask: runTask
}
