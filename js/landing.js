const rulesBtn = document.getElementById('rules-button');
const startGameBtn = document.getElementById('start-game-button');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-button');

function openModal() {
  modalContainer.classList.remove('hidden');
}

function closeModal() {
  modalContainer.classList.add('hidden');
}

function startGame() {
  window.location.href = 'game-board.html';
}

// Event Listeners
rulesBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
startGameBtn.addEventListener('click', startGame);

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
