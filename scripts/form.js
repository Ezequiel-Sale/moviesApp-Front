const axios = require("axios");

const title = document.getElementById("title");
const year = document.getElementById("year");
const director = document.getElementById("director");
const duration = document.getElementById("duration");
const genre = document.getElementById("genre");
const rate = document.getElementById("rate");
const poster = document.getElementById("poster");

const axiosPostData = async (e) => {
  try {
    e.preventDefault();
    const movie = {
      title: title.value.trim(),
      year: year.value.trim(),
      director: director.value.trim(),
      duration: duration.value.trim(),
      genre: genre.value.trim(),
      rate: rate.value.trim(),
      poster: poster.value.trim(),
    };

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!movie.title) {
      alert("Ingrese el título de la película.");
      return;
    }

    if (!movie.year || isNaN(movie.year) || movie.year.length !== 4) {
      alert("Ingrese un año válido para la película.");
      return;
    }

    if (!movie.director) {
      alert("Ingrese el nombre del director de la película.");
      return;
    }

    if (!movie.duration) {
      alert("Ingrese una duración válida para la película.");
      return;
    }

    if (!movie.genre) {
      alert("Ingrese el/los género/s de la película.");
      return;
    }

    if (!movie.rate || isNaN(movie.rate) || movie.rate < 0 || movie.rate > 10) {
      alert("Ingrese una valoración válida para la película (entre 0 y 10).");
      return;
    }

    if (!movie.poster) {
      alert("Ingrese la URL del póster de la película.");
      return;
    } else if (!urlRegex.test(movie.poster)) {
      alert("Ingrese una URL válida para el póster de la película.");
      return;
    }

    const movieCreate = await axios.post(`https://moviesapp-back.onrender.com/movies`, movie);
    alert("Pelicula creada correctamente!");
    return movieCreate;
  } catch (error) {
    alert(error.message);
  }
};
const buttonSend = document.getElementById("btnEnviar");
buttonSend.addEventListener("click", axiosPostData);

const buttonClear = document.getElementById("btnLimpiar");
buttonClear.addEventListener("click", () => {
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("poster").value = "";
});
