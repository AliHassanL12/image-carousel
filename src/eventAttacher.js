import move from "./next";

const attachListeners = function attachRotatingCarouselListeners() {
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  nextButton.addEventListener("click", move.moveNext);
  prevButton.addEventListener("click", move.movePrevious);

  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("click", move.moveToImage);
  });
};

export default attachListeners;
