const scoreCardContainer = document.querySelector('.score-card-container');

function createTitleColumns() {
  const columnTitles = ['Category', 'How To Score', 'Score'];

  // Iterates six times to create as many div elements and assigns class score-column
  for (let i = 0; i < 6; i++) {
    const columnTitleDiv = document.createElement('div');

    // Use modulo to cycle through columnTitles. When i exceeds the number of titles,
    // i % columnTitles.length resets to 0, effectively repeating the titles.
    const title = columnTitles[i % columnTitles.length];

    columnTitleDiv.classList.add('score-column');

    // Assigns the text to each dive from the title variable
    // ensuring all colums get the appropriate title
    columnTitleDiv.textContent = title.toLocaleUpperCase();
    scoreCardContainer.appendChild(columnTitleDiv);
  }
}

function createRows() {
  for (let i = 0; i < 7; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row-items');

    scoreCardContainer.appendChild(rowDiv);
  }
}

createRows();
createTitleColumns();
