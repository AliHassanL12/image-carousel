import { init } from "./carouselData";
import { increaseWidth, decreaseWidth, setWidthBasedOnCircle } from "./widthHandler";
import { render, renderNavigationCircles } from "./applyCarouselStyle";

const carouselMover = function createCarouselImageSlider(initialWidth = 400) {
  const carousel = document.querySelector(".carousel");
  const numberOfImages = carousel.childElementCount;
  renderNavigationCircles(numberOfImages);
  const {
    slideWidth,
    max,
    min,
    currentWidth: initialWidthValue,
  } = init(initialWidth, numberOfImages);
  let currentWidth = initialWidthValue;

  const moveNext = function moveToNextCarouselImage() {
    currentWidth = increaseWidth(currentWidth, slideWidth, max, min);
    render(currentWidth, carousel);
  };

  const movePrevious = function moveToPreviousCarouselImage() {
    currentWidth = decreaseWidth(currentWidth, slideWidth, max, min);
    render(currentWidth, carousel);
  };

  const moveToImage = function jumpToCorrespondingImage(event) {
    const circle = event.target;
    const index = Array.from(circle.parentNode.children).indexOf(circle);
    currentWidth = setWidthBasedOnCircle(slideWidth, index);
    render(currentWidth, carousel);
  }

  return {
    moveNext,
    movePrevious,
    moveToImage,
  };
};

const move = carouselMover();

export default move;
