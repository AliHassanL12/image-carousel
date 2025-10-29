const renderCurrentCircle = function renderCurrentCircle(currentWidth, slideWidth) {
  const resetToggle = document.querySelector('.current');
  if (resetToggle) resetToggle.classList.toggle('current');
  const index = (currentWidth / slideWidth) + 1;
  const indexRelatedCircle = document.querySelector(`.circle:nth-child(${index})`);
  indexRelatedCircle.classList.toggle('current');
};

const render = function applyStyleToCarousel(currentWidth, slideWidth, element) {
  renderCurrentCircle(currentWidth, slideWidth);
  element.style.right = `${currentWidth}px`;
};

const renderNavigationCircles = function renderNavigationCircles(imagesCount) {
  const navCirclesDiv = document.querySelector(".navigation-circles");
  for (let i = 0; i < imagesCount; i++) {
    const span = document.createElement("span");
    span.textContent = "O";
    span.className = "circle";
    navCirclesDiv.appendChild(span);
  }
};

export { render, renderNavigationCircles };
