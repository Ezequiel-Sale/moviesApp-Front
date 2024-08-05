const cards = require("./cards.js")

const containerCards = (data)=>{
    const container = document.getElementById("contenedorCards");
    
    const containerPeli = [];
    
    const pelisElement = data.map((elements) => {
      return cards(elements);
    })
    
    pelisElement.forEach((e) => {
      containerPeli.push(e);
    });
    container.append(...pelisElement);
  
  
  }

  module.exports = containerCards;