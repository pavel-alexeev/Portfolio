// document.getElementById("short").addEventListener("click", changeText);
// document.getElementById("norm").addEventListener("click", changeText);
// document.getElementById("long").addEventListener("click", changeText);

// function change_text() {
//   document.getElementById("demo").innerHTML =
//     "I'm web developer and I'm working with JacaScript, HTML/CSS to deliver exceptional customer experience. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.";
// }

// function changeText() {
//   document.getElementById("short").innerHTML =
//     "I'm web developer and I'm working with JacaScript, HTML/CSS to deliver exceptional customer experience. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.";
// }

// let shortest = document.getElementById("shortest");
// let normal = document.getElementById("normal");
// let longest = document.getElementById("longest");

// shortest.addEventListener("click", changeText);
// normal.addEventListener("click", changeText);
// longest.addEventListener("click", changeText);
// function changeText() {
//   document.getElementById("short").innerHTML =
//     "I'm web developer and I'm working with JacaScript, HTML/CSS to deliver exceptional customer experience. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.";
//   if (shortest) {
//     return (document.getElementById("norm").innerHTML =
//       "I'm web developer and I'm working with JacaScript, HTML/CSS to deliver exceptional customer experience. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.");
//   }
//   if (normal) {
//     document.getElementById("norm").innerHTML = "Hello";
//   }
// }
// document.getElementById("demo").addEventListener("click", myFunction);

// function change_text() {
//   if (document.getElementById("norm")) {
//     document.getElementById("norm").innerHTML = "YOU CLICKED ME!";
//   } else if (document.getElementById("short")) {
//     document.getElementById("short").innerHTML = "YOU CLICKED ME sddfsdf sdf!";
//   }
// }

// function changeText() {
//   let short = document.getElementById("shortest");
//   let norm = document.getElementById("normal");
//   let long = document.getElementById("longest");
//   if (short.onclick) {
//     document.getElementById("short").innerHTML = "YOU CLICKED ME!";
//   }
//   if (norm.onclick) {
//     document.getElementById("norm").innerHTML = "YOU CLIasdasdasdKED ME!";
//   }
// }

// function changeText2() {
//   document.getElementById("norm").innerHTML = "YOU CLICKasdasdED ME!";
function changeText() {
  document.getElementById("short").style.display = "block";
  document.getElementById("norm").style.display = "none";
  document.getElementById("long").style.display = "none";
}

function changeText2() {
  document.getElementById("norm").style.display = "block";
  document.getElementById("short").style.display = "none";
  document.getElementById("long").style.display = "none";
}

function changeText3() {
  document.getElementById("long").style.display = "block";
  document.getElementById("short").style.display = "none";
  document.getElementById("norm").style.display = "none";
}
