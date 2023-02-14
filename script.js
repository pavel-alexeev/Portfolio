"use strict";

function changeText(val) {
  let newText = document.getElementById("text");
  const textOut = [
    { transform: "translateX(0)" },
    { transform: "translateX(-3000px)" },
  ];
  const textIn = [
    { transform: "translateX(1800px)" },
    { transform: "translateX(0)" },
    { transition: "ease-out" },
  ];
  const timing = {
    duration: 1300,
  };
  document.querySelector("html").style.overflowX = "hidden";

  if (val === "shortest") {
    newText.animate(textIn, timing);
    newText.innerHTML = `I'm a web developer`;
  }
  if (val === "short-norm") {
    newText.animate(textIn, timing);

    newText.innerHTML = `I'm a web developer and I'm working with JacaScript, HTML/CSS
    to deliver exceptional customer experience.`;
  }
  if (val === "normal") {
    newText.animate(textIn, timing);
    newText.innerHTML = `I'm a web developer and I'm working with JacaScript, HTML/CSS
    to deliver exceptional customer experience. Adept at
    contributing to a highly collaborative work environment,
    finding solutions, and determining customer satisfaction.`;
  }
  if (val === "norm-long") {
    newText.animate(textIn, timing);
    newText.innerHTML = `sdfsdfsdsadsfdsffvds`;
  }
  if (val === "longest") {
    newText.animate(textIn, timing);
    newText.innerHTML = `I'm web developer and love to code. I'm working with JacaScript, HTML/CSS
    to deliver exceptional customer experience. Adept at
    contributing to a highly collaborative work environment,
    finding solutions, and determining customer satisfaction.<br>
    I have two kids and I love spending time with my family.`;
  }
}

function typeWriter(el) {
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 120 * i)
  );

  setInterval(() => typeWriter(el), 4000);
}

typeWriter(elementEl);
