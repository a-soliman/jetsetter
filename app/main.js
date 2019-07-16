import { app, BrowserWindow } from 'electron';
import { enableLiveReload } from 'electron-compile';

enableLiveReload();

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 300, height: 600, minWidth: 300, show: false, webPreferences: { nodeIntegration: true } });
  mainWindow.loadURL(`file://${__dirname}/index.jade`);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
});
