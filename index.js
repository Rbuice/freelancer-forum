/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelancerCreator() {
  let freelanObj = {};
  let firstrand = Math.floor(Math.random() * 5);
  let secrand = Math.floor(Math.random() * 5);
  let priceRanger = () => {
    return Math.floor(20 + Math.random() * 181);
  };
  freelanObj.name = NAMES[firstrand];
  freelanObj.occupation = OCCUPATIONS[secrand];
  freelanObj.rate = priceRanger();
  return freelanObj;
}
const association = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  association.push(freelancerCreator());
}
function rateAvg() {
  let avg = association.reduce((rateavg, frelan) => rateavg + frelan.rate, 0);
  avg = avg / NUM_FREELANCERS;
  return avg;
}
const averg = rateAvg();

function freeLancer(lancer) {
  let onelance = document.createElement("figure");
  let lanceName = document.createElement("h2");
  lanceName.innerText = lancer.name;
  let lanceOcc = document.createElement("h2");
  lanceOcc.innerText = lancer.occupation;
  let lanceRate = document.createElement("h2");
  lanceRate.innerText = lancer.rate;
  onelance.append(lanceName, lanceOcc, lanceRate);
  return onelance;
}

function freeLancers() {
  let arrLancers = document.createElement("article");
  arrLancers.classList.add("Table");
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    arrLancers.append(freeLancer(association[i]));
  }
  return arrLancers;
}
function rateEle() {
  let rateDis = document.createElement("h2");
  rateDis.innerText = "The average rate is " + averg;
  return rateDis;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <Averate></Averate>
    <h1>Name Occupation Rate</h1>
    <Lancer></Lancer>

  `;
  $app.querySelector("Lancer").replaceWith(freeLancers());
  $app.querySelector("Averate").replaceWith(rateEle());
}
render();
