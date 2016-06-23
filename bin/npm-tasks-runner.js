#! /usr/bin/env node

var readConfig = require('../src/functions').readConfig;
var loopRunTasks = require('../src/functions').loopRunTasks;
var env = process.argv[2] || 'default';

var config = readConfig();
loopRunTasks(config, env);
