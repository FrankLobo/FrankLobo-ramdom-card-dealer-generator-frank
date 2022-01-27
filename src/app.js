/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // setTimeout(() => {
  //   document.querySelector("#card").classList.add("diams"); //aqui debo colocar las funciones a llamar
  //   document.querySelector("#card").classList.add("hearts"); //aqui debo colocar las funciones a llamar
  // }),
  //   10000; //10 segundos
  let cardDealer = document.getElementById("card");
  cardDealer.addEventListener("click", () => {
    let generateRandomNumberCard = () => {
      let arrNumbersCard = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
      ];
      let indexNumbersCard = Math.floor(Math.random() * getNumbers.length);
      return arrNumbersCard[indexNumbersCard];
    };

    let generateRandomSuitCard = () => {
      let arrSuitsCard = ["diammonds", "hearts", "clubs", "spaces"];
      let indexSuitsCard = Math.floor(Math.random() * getNumbers.length);
      return arrSuitsCard[indexSuitsCard];
    };
  });
};
