const render = function applyStyleToCarousel(currentWidth, element) {
  element.style.right = `${currentWidth}px`;
};

const renderNavigationCircles = function renderNavigationCircles(imagesCount) {
    const navCirclesDiv = document.querySelector('.navigation-circles');
    for (let i = 0; i < imagesCount; i++) {
        const span = document.createElement('span');
        span.textContent = 'O';
        span.className = 'circle';
        navCirclesDiv.appendChild(span);
    }
};
export { render, renderNavigationCircles };
