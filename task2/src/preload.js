// Preload for rendering process
// This file is used for inter connection between the main process and the rendering process

const { contextBridge, ipcRenderer } = require('electron');

ipcRenderer.on('encrypted', (e, data) => {
    if (data.type == 'customer') {
        document.getElementById('encrypted-customer-name').innerHTML =
            data.name;
        document.getElementById('encrypted-customer-phone').innerHTML =
            data.phone;
        document.getElementById('encrypted-customer-location').innerHTML =
            data.location;
    } else {
        document.getElementById('encrypted-driver-name').innerHTML = data.name;
        document.getElementById('encrypted-driver-phone').innerHTML =
            data.phone;
        document.getElementById('encrypted-driver-location').innerHTML =
            data.location;
    }
});

const app = {
    send: (tag, data) => ipcRenderer.send(tag, data)
};

contextBridge.exposeInMainWorld('app', app);
