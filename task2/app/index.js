// Start of modal functionality
const openModalButton = document.querySelectorAll('.open-modal-btn');
const closeModalButton = document.querySelectorAll('.modal-close-btn');
const overlay = document.getElementById('overlay');
const updateButton = document.querySelectorAll('.update-btn');

openModalButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        const modal = document.querySelectorAll('.modal');
        openModal(modal[index]);
    });
});

closeModalButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        const modal = document.querySelectorAll('.modal');
        closeModal(modal[index]);
    });
});

// needs functionality completion
updateButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        const modal = document.querySelectorAll('.modal');
        if (index == 0) {
            updateCustomerInfo();
        } else {
            updateDriverInfo();
        }
        closeModal(modal[index]);
    });
});

overlay.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => {
        modal.classList.remove('active');
    });
    overlay.classList.remove('active');
});

function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function clearInputField() {
    document.getElementById('customer-name-input').value = '';
    document.getElementById('customer-phone-input').value = '';
    document.getElementById('customer-location-input').value = '';
    document.getElementById('driver-name-input').value = '';
    document.getElementById('driver-phone-input').value = '';
    document.getElementById('driver-location-input').value = '';
}

function updateCustomerInfo() {
    let userName = document.getElementById('customer-name-input').value;
    let userPhone = document.getElementById('customer-phone-input').value;
    let userLocation = document.getElementById('customer-location-input').value;
    let userInfo = {
        type: 'customer',
        name: userName,
        phone: userPhone,
        location: userLocation
    };
    document.getElementById('customer-name').innerHTML = userName;
    document.getElementById('customer-phone').innerHTML = userPhone;
    document.getElementById('customer-location').innerHTML = userLocation;
    app.send('encryptInfo', userInfo);
    clearInputField();
}

function updateDriverInfo() {
    let driverName = document.getElementById('driver-name-input').value;
    let driverPhone = document.getElementById('driver-phone-input').value;
    let driverLocation = document.getElementById('driver-location-input').value;
    let driverInfo = {
        type: 'driver',
        name: driverName,
        phone: driverPhone,
        location: driverLocation
    };
    document.getElementById('driver-name').innerHTML = driverName;
    document.getElementById('driver-phone').innerHTML = driverPhone;
    document.getElementById('driver-location').innerHTML = driverLocation;
    app.send('encryptInfo', driverInfo);
    clearInputField();
}

document.getElementById('customer-modal').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        updateCustomerInfo();
        closeModal(document.getElementById('customer-modal'));
    }
});

document.getElementById('driver-modal').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        updateDriverInfo();
        closeModal(document.getElementById('driver-modal'));
    }
});
// End of modal functionality
