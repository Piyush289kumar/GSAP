let body = document.body;
let cursorPointer = document.querySelector("#cursorPointer");
body.addEventListener("mousemove", function (dept) {
  console.log(dept.x);
  gsap.to(cursorPointer, {
    x: dept.x - 8,
    y: dept.y - 95,
    opacity: 1,
  });
});
