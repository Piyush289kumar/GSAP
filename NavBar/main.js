let menuBtn = document.querySelector("#menuBtn");
let menuCloseBtn = document.querySelector("#menuCloseBtn");
let sideNavTimeLine = gsap.timeline();
sideNavTimeLine.to("#side-nav", {
  right: 0,
  duration: 0.7,
});
sideNavTimeLine.from("#side-nav h2", {
  x: 150,
  duration: 0.3,
  stagger: 0.28,
  opacity: 0,
});
sideNavTimeLine.from(menuCloseBtn, {
  opacity: 0,
});
sideNavTimeLine.pause();
menuBtn.addEventListener("click", () => {
  sideNavTimeLine.play();
});
menuCloseBtn.addEventListener("click", () => {
  sideNavTimeLine.reverse();
});
