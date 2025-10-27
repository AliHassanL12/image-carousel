import { setMaxWidth } from "./widthHandler";

const init = function initData(width, numberOfImages) {
  const slideWidth = width;
  const max = setMaxWidth(width, numberOfImages);
  const min = 0;
  const currentWidth = 0;
  return {
    slideWidth,
    max,
    min,
    currentWidth,
  };
};

export { init };
