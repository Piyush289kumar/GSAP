window.addEventListener("wheel", function (dept) {
  if (dept.deltaY > 0) {
    gsap.to("#marquee", {
      transform: "translateX(-200%)",
      duration: 1.5,
      repeat: -1,
      ease: "none",
    });
    gsap.to("#marquee img", {
      rotate: 180,
      ease: "none",
    });
  } else {
    gsap.to("#marquee", {
      transform: "translateX(0%)",
      duration: 1.5,
      repeat: -1,
      ease: "none",
    });
    gsap.to("#marquee img", {
      rotate: 0,
      ease: "none",
    });
  }
});
