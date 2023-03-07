// Main file for window frame managing
// All contents file are in the 'app' folder
const { app, BrowserWindow } = require('electron');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    icon: './assets/neural.icns'
  });

  mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);
