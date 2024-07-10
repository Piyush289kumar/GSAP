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

function page1Animation() {
  let timeLine1 = gsap.timeline();

  timeLine1.from("nav #brandName, nav #pages h4, nav #pages button", {
    y: -50,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
  });
  timeLine1.from("#center1 h1, #center1 p", {
    x: -200,
    opacity: 0,
    delay: 0.3,
    stagger: 0.2,
  });
  timeLine1.from("#center1 button", {
    opacity: 0,
  });
  timeLine1.from(
    "#center2 img",
    {
      x: 200,
      opacity: 0,
      delay: 0.3,
      stagger: 0.2,
    },
    "-=1.2"
  );
  timeLine1.from(
    "#partnerBrandLogos img",
    {
      y: 50,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
    },
    "-=1.2"
  );
}

function page2Animation() {
  let timeLine2 = gsap.timeline();

  timeLine2.from("#servicesHeader h3, #servicesHeader p", {
    y: 50,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#servicesHeader",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",
      markers: true,
    },
  });
}

page2Animation();
