const fs = require('fs');
const child = require('child_process');

const platformLinux = process.platform === 'linux';
const platformWindows = process.platform === 'win32';

// create a child process for the target application
let currentChild = child.spawn('npm', ['run', 'start']);

function restartProcess() {
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
}

const files = [
  './dist/scripts/canvas.ts',
  './dist/scripts/fileWatcher.ts',
  './dist/scripts/references.ts',
  './dist/stylesheets/style.css',
  './dist/index.html',
];

const watcherList = Array.from(files, (filename) => fs.watch(filename));
watcherList.forEach((watcher) =>
  watcher.on('change', () => {
    restartProcess();
  })
);
