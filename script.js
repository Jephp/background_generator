//disse variabler samler elementerne op, så vi kan
// bruge dem i vores kode længere nede. Fx samler vi h3 op
// og elementer med klassen color1 og color 2 (input funktioner i html)

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function backgroundChange(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

};


//disse to event listeners lytter til, hvilken farve brugeren vælger i color 1 og color 2:

color1.addEventListener("input", backgroundChange);

color2.addEventListener("input", backgroundChange);

