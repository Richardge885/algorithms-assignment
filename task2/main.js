// Main file for window frame managing
// All contents file are in the 'app' folder
const { app, BrowserWindow, ipcMain } = require('electron');
const encryptInfo = require('./src/user');

ipcMain.on('encryptInfo', (e, data) => {
    console.log('from main process');
    let encrypted = {
        type: data.type,
        name: encryptInfo(data.name),
        phone: encryptInfo(data.phone),
        location: encryptInfo(data.location)
    };
    e.reply('encrypted', encrypted);
});

// Main Window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/src/preload.js`
        }
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile('./app/index.html');
}

app.on('ready', createMainWindow);
