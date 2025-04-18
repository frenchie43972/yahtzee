const upperSection = document.querySelector('.upper-section');
const lowerSection = document.querySelector('.lower-section');

let categoryTitles = [''];
const upperHeaders = ['Upper Section', 'How To Score', 'Score'];
const lowerHeaders = ['Lower Section', 'How To Score', 'Score'];

function createUpperSection() {
  for (let i = 0; i < 27; i++) {
    const upperSectionFields = document.createElement('div');

    upperSectionFields.classList.add('score-card');
    upperSection.appendChild(upperSectionFields);
  }
}

function createLowerSection() {
  for (let i = 0; i < 27; i++) {
    const lowerSectionFields = document.createElement('div');
    lowerSectionFields.classList.add('score-card');

    lowerSection.appendChild(lowerSectionFields);
  }
}

createUpperSection();
createLowerSection();
