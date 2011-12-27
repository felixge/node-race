#!/usr/bin/env node
var spawn  = require('child_process').spawn;
var script = process.argv[2];

function executeScript() {
  process.stdout.write('.');

  var child  = spawn(process.execPath, [script]);
  var buffer = [];

  child.stdout.on('data', function(chunk) {
    buffer.push(function() {process.stdout.write(chunk)});
  });

  child.stderr.on('data', function(chunk) {
    buffer.push(function() {process.stderr.write(chunk)});
  });

  child.on('exit', function(code, signal) {
    if (signal) throw new Error('Script killed by signal: ' + signal);

    if (code === 0) return executeScript();

    console.log('');
    for (var i = 0; i < buffer.length; i++) {
      buffer[i]();
    }

    process.exit(code);
  });
}

executeScript();
