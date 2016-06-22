#! /usr/bin/env node

var execSync = require('child_process').execSync;
var fs = require('fs');
var env = process.argv[2] || 'default';

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

  config[env].forEach(function(task) {
    runTask(task.name, task.src, task.dest, task.options);
  });
}

function runTask (taskname, src, dest, options) {
  execSync(taskname + ' '  + src + ' ' + dest + ' ' + options);
}

var config = readConfig();
loopRunTasks(config, env);
