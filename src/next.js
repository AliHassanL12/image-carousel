const carouselMover = function createCarouselImageSlider() {
  const SLIDE_WIDTH = 400;
  let currentWidth = 0;
  const min = 0;
  const setMaxWidth = function setMaxWidth() {
    const carousel = document.querySelector(".carousel");
    const numberOfChildren = carousel.childElementCount;
    return SLIDE_WIDTH * (numberOfChildren - 1);
  };

  const max = setMaxWidth();
  const checkWidth = function checkWidthWithinLimits() {
    const isMax = currentWidth === max;
    const isMin = currentWidth === min;
    return { isMax, isMin };
  };

  const increaseWidth = function increaseCurrentWidth() {
    const { isMax } = checkWidth();
    if (!isMax) return currentWidth += SLIDE_WIDTH;
    currentWidth = min;
  };

  const decreaseWidth = function decreaseCurrentWidth() {
    const { isMin } = checkWidth();
    if (!isMin) return currentWidth -= SLIDE_WIDTH;
    currentWidth = max;
  };

  const applyRightStyle = function applyStyleToCarousel() {
    const carousel = document.querySelector(".carousel");
    carousel.style.right = `${currentWidth}px`;
  };

  const moveNext = function moveToNextCarouselImage() {
    increaseWidth();
    applyRightStyle();
  };

  const movePrevious = function moveToPreviousCarouselImage() {
    decreaseWidth();
    applyRightStyle();
  };

  return {
    moveNext,
    movePrevious,
  };
};

export default carouselMover;
