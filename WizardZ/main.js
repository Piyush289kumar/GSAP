let h1 = document.querySelector("#textID");
let h1Text = document.querySelector("#textID").textContent;
let splitedText = h1Text.split("");
let halfText = Math.floor(splitedText.length / 2);
(() => {
  let cletter = "";
  splitedText.forEach(function (ele, idx) {
    cletter += `<span class='${
      idx < halfText ? "firstHalf" : "secondHalf"
    }'>${ele}</span>`;
  });
  h1.innerHTML = cletter;
})();
gsap.from("h1 .firstHalf", {
  y: 150,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.15,
});
gsap.from("h1 .secondHalf", {
  y: 150,
  duration: 0.5,
  delay: 0.3,
  stagger: -0.15,
});
