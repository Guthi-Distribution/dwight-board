const fs = require('fs');
const child = require('child_process');

const platformLinux = process.platform === 'linux';
const platformWindows = process.platform === 'win32';

const filewatch = './dist/scripts/canvas.ts';

// watch the target file
const watcher = fs.watch(filewatch);

// create a child process for the target application
let currentChild = child.spawn('npm', ['run', 'start']);

watcher.on('change', () => {
  console.log('Reloading electron...');

  // we assure we have only one child process at time
  if (currentChild) {
    if (platformLinux) {
      child.exec('killall electron');
    } else if (platformWindows) {
      // TODO: needs testing
      child.exec('taskkill electron.exe');
    }
    currentChild.kill();
  }
  // reset the child process
  currentChild = child.spawn('npm', ['run', 'start']);
});
