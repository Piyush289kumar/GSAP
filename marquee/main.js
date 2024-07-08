window.addEventListener("wheel", function (dept) {
  if (dept.deltaY > 0) {
    gsap.to("#marquee", {
      transform: "translateX(-200%)",
      duration: 1,
      repeat: -1,
      ease: "none",
    });
  } else {
    gsap.to("#marquee", {
      transform: "translateX(0%)",
      duration: 1,
      repeat: -1,
      ease: "none",
    });
  }
});
