let yourMoviesList = [
  {
    name: "The Shawshank Redemption",
    genre: "Drama",
    time: 12,
    rentalPrice: 2.99,
  },
  {
    name: "The Godfather",
    genre: "Crime",
    time: 12,
    rentalPrice: 3.49,
  },
];
let moviesTable = document.getElementById("your-movies-table");

if (yourMoviesList) {
  renderTable(yourMoviesList);
}

function lessTime(index) {
  let selectedMovie = yourMoviesList[index];
  if (selectedMovie.time >= 12) {
    selectedMovie.time -= 12;
    renderTable(yourMoviesList);
  } else {
    alert("You can't go any lower");
  }
}

function moreTime(index) {
  let selectedMovie = yourMoviesList[index];
  if (selectedMovie.time < 168) {
    selectedMovie.time += 12;
    renderTable(yourMoviesList);
  } else {
    alert("You reached maximum time");
  }
}

function removeMovie(index) {
  if (yourMoviesList) {
    let selectedMovie = yourMoviesList[index];
    yourMoviesList.splice(selectedMovie, 1);
    console.log(yourMoviesList);
    renderTable(yourMoviesList);
  } else {
    moviesTable.innerHTML = `<p>You have no movies.</p>`
  }
}

function renderTable(movies) {
  let moviesList = `
  <tr>
  <th>Name</th>
  <th>Genre</th>
  <th>Time</th>
  <th>Price</th>
  </tr>`;
  movies.forEach((element, index) => {
    moviesList += `
    <tr>
    <td>${element.name}</td>
    <td>${element.genre}</td>
    <td class="time-options-column"><p class="less-time-button" onclick=lessTime(${index})>&lt;</p>
    <p class="time-option">${element.time}h</p>
    <p class="more-time-button" onclick=moreTime(${index})>&gt;</p></td>
    <td>${element.rentalPrice}</td>
    <td onclick=removeMovie(${index})>Remove</td>
    </tr>
    `;
  });
  moviesTable.innerHTML = moviesList;
}
