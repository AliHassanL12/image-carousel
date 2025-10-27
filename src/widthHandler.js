const checkWidth = function checkWidthWithinLimits(currentWidth, max, min) {
  const isMax = currentWidth === max;
  const isMin = currentWidth === min;
  return { isMax, isMin };
};

const increaseWidth = function increaseCurrentWidth(
  currentWidth,
  slideWidth,
  max,
  min,
) {
  const { isMax } = checkWidth(currentWidth, max, min);
  if (!isMax) return (currentWidth += slideWidth);
  return min;
};

const decreaseWidth = function decreaseCurrentWidth(
  currentWidth,
  slideWidth,
  max,
  min,
) {
  const { isMin } = checkWidth(currentWidth, max, min);
  if (!isMin) return (currentWidth -= slideWidth);
  return max;
};

const setMaxWidth = function setMaxWidth(width, numberOfImages) {
  return width * (numberOfImages - 1);
};

const setWidthBasedOnCircle = function setWidthBasedOnCircle(slideWidth, indexOfCircle) {
  return slideWidth * indexOfCircle;
}

export { increaseWidth, decreaseWidth, checkWidth, setMaxWidth, setWidthBasedOnCircle };
