  const firstInput = document.querySelector(".first-input");
  const secondInput = document.querySelector(".second-input");
  const thirdInput = document.querySelector(".third-input");
  const generatorButton = document.querySelector(".generator-button");
  const resultInput = document.querySelector(".result-input");
  
  generatorButton.addEventListener("click", generateNumber);
  
  function generateNumber(){
      const min = Math.ceil(firstInput.value);
      const max = Math.floor(secondInput.value);
  
      const result = Math.floor(Math.random() * (max - min +1))+ min;
      resultInput.value = result;
  }