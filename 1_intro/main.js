gsap.from("#page1 #box", {
  rotation: 360,
  duration: 1,
  delay: 1,
});
gsap.from("#page2 #box", {
  rotation: 360,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
  },
});
