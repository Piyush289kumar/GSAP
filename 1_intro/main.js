let main = document.querySelector("#main");
let cursorPointer = document.querySelector("#cursor-pointer");
let imageDiv = document.querySelector("#image-div");
main.addEventListener("mousemove", function (dept) {
  gsap.to(cursorPointer, {
    x: dept.x,
    y: dept.y,
  });
});
imageDiv.addEventListener("mouseenter", function () {
  cursorPointer.innerHTML = "View More";
  gsap.to(cursorPointer, {
    scale: 2,
  });
});
imageDiv.addEventListener("mouseleave", function () {
  cursorPointer.innerHTML = "";
  gsap.to(cursorPointer, {
    scale: 1,
  });
});
