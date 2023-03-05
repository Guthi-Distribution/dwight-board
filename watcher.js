const fs = require('fs');
const child = require('child_process');

const filewatch = './dist/scripts/canvas.ts';

// watch the target file
const watcher = fs.watch(filewatch);

// create a child process for the target application
let currentChild = child.spawn('npm', ['run', 'start']);

watcher.on('change', () => {
  // we assure we have only one child process at time
  if (currentChild) {
    child.exec('killall electron');
    currentChild.kill();
  }
  // reset the child process
  currentChild = child.spawn('npm', ['run', 'start']);
});
