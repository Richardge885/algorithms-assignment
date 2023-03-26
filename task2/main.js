// Main file for window frame managing
// All contents file are in the 'app' folder
const { app, BrowserWindow, ipcMain } = require('electron');
const encryptInfo = require('./src/user');
const { graph, shortestPath } = require('./src/graph');

process.env.NODE_ENV = 'production';

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

ipcMain.on('encryptInfo', (e, data) => {
    let encrypted = {
        type: data.type,
        name: encryptInfo(data.name),
        phone: encryptInfo(data.phone),
        location: encryptInfo(data.location)
    };
    e.reply('encrypted', encrypted);
});

ipcMain.on('graphInfo', (e, locations) => {
    const paths = {
        driverToStore: shortestPath(graph, locations.driver, locations.store),
        storeToCustomer: shortestPath(
            graph,
            locations.store,
            locations.customer
        )
    };
    e.reply('shortestPath', paths);
});

// Main Window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: isDev ? 1608 : 1400,
        height: 800,
        resizable: isDev ? true : false,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/src/preload.js`,
            devTools: isDev ? true : false
        }
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile('./app/index.html');
    mainWindow.on('ready-to-show', mainWindow.show);
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    app.quit();
});
