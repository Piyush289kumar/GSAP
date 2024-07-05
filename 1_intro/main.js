let main = document.querySelector("#main");
let cursorPointer = document.querySelector("#cursor-pointer");

main.addEventListener("mousemove", function (dept) {
  gsap.to(cursorPointer, {
    x: dept.x,
    y: dept.y,
  });
});
