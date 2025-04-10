const rulesBtn = document.getElementById('rules-button');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-button');

function openModal() {
  modalContainer.classList.remove('hidden');
}

function closeModal() {
  modalContainer.classList.add('hidden');
}

// Event Listeners
rulesBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Event listener to escape out of the rules modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalContainer.classList.add('hidden');
  }
});

// Event listener to click outside the modal to close
modalContainer.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.add('hidden');
  } else {
    return;
  }
});
