import { app, BrowserWindow } from 'electron';
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile(path.join(path.dirname(__dirname), 'src/index.html'));
};

app.whenReady().then(() => {
  createWindow();
});
