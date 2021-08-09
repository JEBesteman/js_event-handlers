//opdracht 1
//Gebruik een click event en "attach" het click event aan de button
//Wanneer er op de button geklikt wordt, geef een alert: "button clicked"

// const btn = document.getElementById("mybutton");

// btn.addEventListener("click", function() { alert("button clicked")});

// //opdracht 2
// //Maak een nieuwe functie die de volgende functionaliteiten in zich heeft:
// //Maak een klik event vast aan de nieuwe button
// //Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 

// const btnChangeBg = document.getElementById("buttonChangeBg");
// btnChangeBg.addEventListener("click", function() { alert("button clicked again")}); //werkt!!

const btn = document.querySelector("#mybutton");
btn.addEventListener("click", function() { alert("button clicked")});

const btnChangeBg = document.querySelector("#buttonChangeBg");
//Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 
const body = document.querySelector("body");

const makeBodyRed = () => {
    body.classList.add("red-background");
};
btnChangeBg.addEventListener("click", makeBodyRed);

//werkt!!!
//Na de click op de button ziet de class van je body tag er zo uit: class="blue-background red-background" . Door de volgorde van de CSS in de CSS file, zal de laatste stijl in je stylesheet toegepast. In dit geval staat in je stylesheet eerst de blauwe achtergrond en daarna de rode achtergrond gedefineerd. De body heeft nu 2 styles, waarvan de rode achtergrond nu toegepast zal worden.

//opdracht 3
// We gaan de changeColor functie veranderen zodat de achtergrondkleur ook weer terug veranderd naar rood wanneer er op de knop wordt geklikt. De achtergrondkleur wordt dan "getoggeld" , met andere woorden: erop gezet en er weer afgehaald en er weer opgezet, etc.
// Verander de naam van de functie van changeColor naar toggleColor
// In plaats van het toevoegen van een extra class "red-background" aan de classlist gaan we de class togglen. Gebruik Google om erachter te komen hoe je dit doet. Hint: toggle.

const btnChangeBg = document.querySelector("#buttonChangeBg");
const body = document.querySelector("body");

const toggleColor = () => {
    body.classList.toggle("red-background");
};
btnChangeBg.addEventListener("click", toggleColor);

//Yes!! werkt(als je opdracht 2 uit comment!!) Verandert ook in DOM!!