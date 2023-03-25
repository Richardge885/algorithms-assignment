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
