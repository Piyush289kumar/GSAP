let gsapTimeLine = gsap.timeline();

gsapTimeLine.from("#nav h1", {
  y: -30,
  duration: 1.0,
  delay: 0.5,
  opacity: 0,
});

gsapTimeLine.from("#nav-items a", {
  y: -30,
  duration: 0.2,
  opacity: 0,
  stagger: 1,
});

