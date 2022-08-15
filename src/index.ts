import { app, BrowserWindow } from 'electron';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  });

  win.loadFile(path.join(path.dirname(__dirname), 'dist/index.html'));
};

app.whenReady().then(() => {
  createWindow();
});
