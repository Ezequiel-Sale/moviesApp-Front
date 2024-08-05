const axios = require("axios");
const containerCards = require("./containerCards");
const autoPlayVideo = require("./autoPlayVideo");
const URI = process.env.URI

const axiosGetData = async () => {
  try {
    const { data } = await axios.get(`${URI}/movies`);
    containerCards(data);
  } catch (error) {
    alert(error.message);
  }
};

axiosGetData();
autoPlayVideo();

