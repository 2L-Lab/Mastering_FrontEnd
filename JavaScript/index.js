const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

questionContainer.style.borderRadius = "50px";

btn1.addEventListener("click", () => {
  document.querySelector("p").style.visibility = "visible";
  document.querySelector("p").style.background = "green";
});

btn2.addEventListener("click", () => {
  document.querySelector("p").style.visibility = "visible";
  document.querySelector("p").style.background = "red";
});

// ----------------Mouse Event-------------------------------------------

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "brown";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "brown";
});
questionContainer.addEventListener("mouseover", () => {
  questionContainer.style.transform = "rotate(2deg)";
});

// --------------------------KeyPress Event-------------------------------

const KeypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
});

// ----------------------------Scroll event------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// -------------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const checked = document.querySelector('input[type="checkbox"]');
const form = document.querySelector("form");
const signup = document.querySelector(".signup");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  //   select = e.target.value;
  language = e.target.value;
  console.log(language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    signup.innerHTML = `
    <em> votre Pseudo est ${pseudo} et vous aimez le ${language}</em>
    `;
  } else {
    console.log("Veuiilez validez les cgv !");
  }
});

// ------------------Load Event---------------------------------

window.addEventListener("load", () => {
  console.log("Documents Chargés");
});

// ------------------------forEach ------------------------------

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// ----------------------------------Onclick-----------------------

document.body.onclick = () => {
  console.log("click!!!");
};

// -------------------------------------------------------------------

questionContainer.addEventListener("click", (e) => {
  alert("test !!");
  e.stopPropagation();
});

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// Browser Object Model (BOM)
// Objet window contient innerWidth, innerHeight
// window.open("http://google.com", "Cours JS", "height=600,width=800");
// window.close() dans la console pour test

// Evenements adossés à l'objet Window : Alert, confirm, prompt

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Bravo vous avez gagné, entrez votre nom");

  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

setTimeout(() => {
  questionContainer.style.borderRadius = "160px";
}, 2000);

let interval = setInterval(() => {
  document.body.innerHTML +=
    "<div class='box'><h2>Nouvelle Boite !</h2></div> ";
}, 2000);

document.body.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName !== "BODY") {
      e.target.remove();
      clearInterval(interval);
    }
  },
  false
);

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");
// location.assign('http://lequipe.fr);

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// navigator
// identifie le navigateur web
// navigator.userAgent

// montrer la location dans le navigateur
// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History
// console.log(window.history);
// window.history.back();
// history.go(-1)
