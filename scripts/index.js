const axios = require("axios");
const containerCards = require("./containerCards");
const autoPlayVideo = require("./autoPlayVideo");

const axiosGetData = async () => {
  try {
    const { data } = await axios.get(`https://moviesapp-back.onrender.com/movies`);
    containerCards(data);
  } catch (error) {
    alert(error.message);
  }
};

axiosGetData();
autoPlayVideo();

