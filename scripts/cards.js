function cards(peliculasInst) {
    const { title, year, director, duration, genre, rate, poster } =
      peliculasInst;
    const peliCard = document.createElement("div");
    const titleMovie = document.createElement("a");
    const yearMovie = document.createElement("p");
    const directorMovie = document.createElement("p");
    const durationMovie = document.createElement("p");
    const genreMovie = document.createElement("p");
    const rateMovie = document.createElement("p");
    const posterMovie = document.createElement("img");
  
    titleMovie.href = "#";
    titleMovie.textContent = title;
    yearMovie.textContent = `Año de lanzamiento: ${year}`;
    directorMovie.textContent = `Director: ${director}`;
    durationMovie.textContent = `Duración:  ${duration}`;
    genreMovie.textContent = `Género: ${genre}`;
    rateMovie.textContent = `⭐ ${rate}`;
    posterMovie.src = poster;
    posterMovie.alt = title;
  
    titleMovie.classList.add("title-movie");
    yearMovie.classList.add("year-movie");
    directorMovie.classList.add("director-movie");
    durationMovie.classList.add("duration-movie");
    genreMovie.classList.add("genre-movie");
    rateMovie.classList.add("rate-movie");
    posterMovie.classList.add("poster-movie");
    posterMovie.classList.add("poster-place");
    peliCard.classList.add("peli-card");
  
    peliCard.append(
      titleMovie,
      yearMovie,
      directorMovie,
      durationMovie,
      genreMovie,
      rateMovie,
      posterMovie
    );
  
    return peliCard;
  }

  module.exports = cards