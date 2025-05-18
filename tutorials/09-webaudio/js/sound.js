window.addEventListener("DOMContentLoaded", () => {
    const lion = document.querySelector("#song");
    const raccoon = document.querySelector("#sfx");
    const squirrel = document.querySelector("#squirrel");
    const koala = document.querySelector("#koala");
  
    const lionBtn = document.querySelector("#play-lion");
    const raccoonBtn = document.querySelector("#play-raccoon");
    const squirrelBtn = document.querySelector("#play-squirrel");
    const koalaBtn = document.querySelector("#play-koala");
  
    const lionSlider = document.querySelector("#volume-lion");
    const raccoonSlider = document.querySelector("#volume-raccoon");
    const squirrelSlider = document.querySelector("#volume-squirrel");
    const koalaSlider = document.querySelector("#volume-koala");
  
    lionBtn.addEventListener("click", () => {
      lion.play();
    });
  
    raccoonBtn.addEventListener("click", () => {
      raccoon.play();
    });
  
    squirrelBtn.addEventListener("click", () => {
      squirrel.play();
    });
  
    koalaBtn.addEventListener("click", () => {
      koala.play();
    });
  
    lionSlider.addEventListener("input", () => {
      lion.volume = lionSlider.value;
    });
  
    raccoonSlider.addEventListener("input", () => {
      raccoon.volume = raccoonSlider.value;
    });
  
    squirrelSlider.addEventListener("input", () => {
      squirrel.volume = squirrelSlider.value;
    });
  
    koalaSlider.addEventListener("input", () => {
      koala.volume = koalaSlider.value;
    });
  });