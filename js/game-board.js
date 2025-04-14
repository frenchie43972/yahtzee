const scoreCardContainer = document.querySelector('score-card-container');

function createTitleColumns() {
  for (let i = 0; i < 7; i++) {
    scoreCardContainer.textContent += `<div class='score-column>Hello</div>'`;
  }
}

createTitleColumns();
