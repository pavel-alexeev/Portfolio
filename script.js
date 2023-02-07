function changeText(val) {
  let newText = document.getElementById("text");
  if (val === "shortest") {
    newText.innerHTML = `I'm a web developer`;
    newText.style.animation = "1s ease-out";
  }
  if (val === "short-norm") {
    newText.innerHTML = `I'm a web developer and I'm working with JacaScript, HTML/CSS
    to deliver exceptional customer experience.`;
  }
  if (val === "normal") {
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
