function changeText(val) {
  let newText = document.getElementById("text");
  const textOut = [
    { transform: "translateX(0)" },
    { transform: "translateX(-3000px)" },
  ];
  const textIn = [
    { transform: "translateX(1000px)" },
    { transform: "translateX(0)" },
    { transition: "ease-out" },
  ];
  const timing = {
    duration: 1000,
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
    newText.innerHTML = `sdfsdfsdsadsfdsffvds`;
  }
  if (val === "longest") {
    newText.innerHTML = `sdfsdfs`;
  }
}
