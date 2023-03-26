const findPath = document.getElementById('find-path');
const overlay = document.getElementById('overlay');

findPath.addEventListener('click', () => {
    sendInfo();
});

document.getElementById('graph-modal').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') sendInfo();
});

function sendInfo() {
    let storeLocation = document.getElementById('store-location').value;
    storeLocation = storeLocation.toUpperCase();
    let customerLocation =
        document.getElementById('customer-location').innerHTML;
    let driverLocation = document.getElementById('driver-location').innerHTML;
    const locations = {
        store: storeLocation,
        customer: customerLocation,
        driver: driverLocation
    };
    app.send('graphInfo', locations);
    document.getElementById('graph-modal').classList.remove('active');
    overlay.classList.remove('active');
    document.getElementById('store-location').value = '';
}
