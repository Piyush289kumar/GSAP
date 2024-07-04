gsap.to("#page2 h1", {
  transform: "translateX(-180%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 3,
    markers: true,
    start: "top 0%",
    end: "top -150%",
    pin: true,
  },
});
