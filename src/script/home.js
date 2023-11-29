let moviesArr = [
  {
    name: "The Shawshank Redemption",
    genre: "Drama",
    rentalPrice: 2.99,
    stockCount: 10,
  },
  {
    name: "The Godfather",
    genre: "Crime",
    rentalPrice: 3.49,
    stockCount: 8,
  },
  {
    name: "The Dark Knight",
    genre: "Action",
    rentalPrice: 3.99,
    stockCount: 1,
  },
  {
    name: "Pulp Fiction",
    genre: "Crime",
    rentalPrice: 2.79,
    stockCount: 15,
  },
  {
    name: "Forrest Gump",
    genre: "Drama",
    rentalPrice: 2.49,
    stockCount: 0,
  },
  {
    name: "Inception",
    genre: "Sci-Fi",
    rentalPrice: 4.29,
    stockCount: 9,
  },
  {
    name: "The Matrix",
    genre: "Sci-Fi",
    rentalPrice: 3.79,
    stockCount: 11,
  },
  {
    name: "Jurassic Park",
    genre: "Adventure",
    rentalPrice: 2.89,
    stockCount: 14,
  },
];
let moviesTable = document.getElementById("available-movies");
let yourMoviesList = [];

if (moviesArr) {
  renderTable(moviesArr);
}

function rentMovie(index) {
  let selectedMovie = moviesArr[index];
  if (selectedMovie.stockCount > 0) {
    yourMoviesList.push(selectedMovie);
    selectedMovie.stockCount--;
    renderTable(moviesArr);
  } else {
    alert("This movie is out of stock.");
  }
}

function renderTable(movies) {
  let moviesList = `
  <tr>
  <th>Name</th>
  <th>Genre</th>
  <th>Price for 12h</th>
  <th>Is in stock</th>
  </tr>`;
  movies.forEach((element, index) => {
    moviesList += `
    <tr>
    <td>${element.name}</td>
    <td>${element.genre}</td>
    <td>${element.rentalPrice}</td>
    <td>${
      element.stockCount > 0
        ? '<img class="instock-picture"src="/src/assets/img/check.png" alt="check"/>'
        : '<img class="instock-picture" src="/src/assets/img/cross.png" alt="cross"/>'
    } </td>
    <td onclick=rentMovie(${index})>Rent</td>
    </tr>
    `;
  });
  moviesTable.innerHTML = moviesList;
}