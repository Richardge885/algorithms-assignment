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

ipcRenderer.on('shortestPath', (e, paths) => {
    const driverToStore = document.getElementById(
        'shortest-path-driver-to-store'
    );
    const storeToCustomer = document.getElementById(
        'shortest-path-store-to-customer'
    );
    let driverToStorePath = 'Driver to Store Shortest Rout is from, ';
    let storeToCustomerPath = 'Store to Customer Shortest Rout is from, ';

    driverToStorePath = driverToStorePath + paths.driverToStore.path[0];
    for (let i = 1; i < paths.driverToStore.path.length; i++) {
        driverToStorePath =
            driverToStorePath + ', to ' + paths.driverToStore.path[i];
    }
    driverToStorePath =
        driverToStorePath +
        '. The total distance is ' +
        paths.driverToStore.distance +
        'km';

    storeToCustomerPath = storeToCustomerPath + paths.storeToCustomer.path[0];
    for (let i = 1; i < paths.storeToCustomer.path.length; i++) {
        storeToCustomerPath =
            storeToCustomerPath + ', to ' + paths.storeToCustomer.path[i];
    }
    storeToCustomerPath =
        storeToCustomerPath +
        '. The total distance is ' +
        paths.storeToCustomer.distance +
        'km';

    driverToStore.innerHTML = driverToStorePath;
    storeToCustomer.innerHTML = storeToCustomerPath;
});

const app = {
    send: (tag, data) => ipcRenderer.send(tag, data)
};

contextBridge.exposeInMainWorld('app', app);
