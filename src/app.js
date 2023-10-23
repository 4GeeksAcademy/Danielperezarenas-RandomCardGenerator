/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

 // Variables 
  let cardsType = ['♦', '♥', '♠', '♣']
  let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]

  // Funcion obtener pinta
  function getTypeOfCard() {
    let typeIndex = Math.floor(Math.random() * cardsType.length);
    let randomType = cardsType[typeIndex];
    
    let typeOfCard = document.querySelectorAll(".suits");
    typeOfCard.forEach(typeOfCardElement => {
      typeOfCardElement.innerHTML = randomType;
      
      if (randomType == '♦' || randomType == '♥') {
        typeOfCardElement.style.color = ("red")
      } else {
        typeOfCardElement.style.color = ("black")
      }
    });
  }
  getTypeOfCard();
  
// Funcion obtener número de carta
  function getCard() {
    let cardsIndex = Math.floor(Math.random() * cards.length);
    let randomCard = cards[cardsIndex];
    
    let card = document.querySelector(".card-body");
    card.innerHTML = randomCard;
  }
  getCard();

  function getRandomCard(){
    getTypeOfCard();
    getCard();
  }

// Botón random generator
  document.querySelector(".btn").addEventListener("click", getRandomCard);

// Timer
  setInterval(getRandomCard, 10000);
}