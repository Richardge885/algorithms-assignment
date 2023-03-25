// Main file for window frame managing
// All contents file are in the 'app' folder
const { app, BrowserWindow } = require('electron');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    webPreferences: {
      nodeIntergration: true
    }
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);
