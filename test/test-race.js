var assert  = require('assert');
var exec    = require('child_process').execFile;
var path    = require('path');
var race    = path.join(__dirname, '../bin/race.js');
var fixture = path.join(__dirname, 'fixture/random.js');

exec(race, [fixture], function(err, stdout, stderr) {
  assert.ok(err);
});
