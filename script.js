/*
Uppgift 2
*/

console.log("\n\n\n=== Uppgift 2 ===");

// Före blocket
console.log("Före blocket:");
try {
  console.log(kaffe);
} catch {
  console.log("kaffe finns inte här");
}
try {
  console.log(bulle);
} catch {
  console.log("bulle finns inte här");
}
try {
  console.log(juice);
} catch {
  console.log("juice finns inte här");
}

{
  // Inuti blocket
  var kaffe = "Kaffe"; // var kan nås utanför blocket
  let bulle = "Kanelbulle"; // let är blockscope
  const juice = "Apelsinjuice"; // const är blockscope och kan inte ändras

  console.log("Inuti blocket:");
  console.log(kaffe);
  console.log(bulle);
  console.log(juice);

  // Litet misstag för att visa vad som inte går:
  // juice = "Äpplejuice"; // DETTA GER FEL om det aktiveras då det är en const
}

// Efter blocket
console.log("Efter blocket:");
console.log(kaffe); // fungerar
try {
  console.log(bulle);
} catch {
  console.log("bulle finns inte här");
}
try {
  console.log(juice);
} catch {
  console.log("juice finns inte här");
}

/*
Reflektion:
- var kan användas både inuti och utanför blocket.  
- let och const existerar bara inuti blocket där de deklarerades.  
- console.log före blocket kan ge fel för let och const eftersom de inte är definierade ännu.  
- console.log inuti blocket fungerar för alla.  
- console.log efter blocket fungerar bara för var.  
- Man får inte ändra en const, annars kraschar koden.
*/

/*
Uppgift 3
*/

console.log("\n\n\n=== Uppgift 3 – Jämförelser och specialvärden ===");

// 1. Testa == och ===
console.log("'110' == 110 :", "110" == 110); // true, värdena konverteras innan jämförelse
console.log("'3' === 3 :", "3" === 3); // false, olika typer (string vs number)

console.log("NaN === NaN :", NaN === NaN); // false, NaN är aldrig lika med något, inte ens sig själv

console.log("null == undefined :", null == undefined); // true, == ser dem som lika
console.log("null === undefined :", null === undefined); // false, olika typer

// 2. Ternary operator med undefined
let värde;
let resultat = värde ? "truthy" : "falsy";
console.log("undefined är:", resultat); // undefined är falsy

// 3. Exempel med if-sats
if (värde) {
  console.log("Värdet är truthy");
} else {
  console.log("Värdet är falsy");
}

/*
Reflektion Uppgift 3:

1. Skillnaden mellan == och ===:
   - Jag använder == när jag vill jämföra värden och låta JavaScript göra typkonvertering, t.ex. '3' == 3 blir true.
   - Jag använder === när jag vill jämföra både värde och typ, t.ex. '3' === 3 blir false.
   - Jag vet att NaN är speciellt: NaN === NaN är alltid false.
   - Jag ser att null och undefined är lika med == men skiljs åt med ===.

2. När ett uttryck står för sig självt i ternary operator eller if-sats:
   - Jag vet att JavaScript kollar om värdet är "truthy" eller "falsy".
   - Falsy-värden för mig är: false, 0, "", null, undefined, NaN.
   - Alla andra värden betraktar jag som truthy.

3. Vad NaN, undefined och null representerar:
   - Jag förstår att NaN betyder "Not a Number" och används när en matematisk operation inte kan ge ett tal.
   - Jag vet att undefined betyder att en variabel är deklarerad men inte fått något värde.
   - Jag använder null när jag vill representera ett avsiktligt "inget värde".
*/

/*
Uppgift 4
*/

console.log("\n\n\n=== Uppgift 4 – Funktioner ===");

// Jag skapar en variabel i roten av scriptet
let name = "Samir";
console.log("Värdet på name utanför funktion:", name);

// 1. Skapa funktionen greet
// Jag använder här en funktionsdeklaration för enkelhet
function greet(name) {
  // Jag returnerar en hälsning till den person som skickas in som argument
  return "Hej " + name;
}

// 2. Anropa funktionen med ett argument
// Jag testar funktionen genom att skicka in "Ahmad"
console.log(greet("Ahmad")); // Hej Ahmad

// Jag sparar returvärdet i en variabel för att använda det senare
let hälsning = greet("Ariz");
console.log(hälsning); // Hej "Ariz"

// 3. Visa skillnad mellan parameter och variabel
// Jag kollar värdet på name utanför funktionen, det påverkas inte av funktionen
console.log("Värdet på name efter funktioner:", name); // fortfarande Mikaela

// Jag ändrar parametern inuti funktionen för att visa skillnaden
function changeName(name) {
  // Jag ändrar parametern, men detta påverkar inte den globala variabeln
  name = "Nytt namn";
  console.log("Parametern name inuti funktionen:", name);
}
changeName(name);

// Jag kollar värdet utanför funktionen igen för att se att det inte har ändrats
console.log(
  "Värdet på name utanför funktionen efter ändring i funktion:",
  name
);

/*
Reflektion Uppgift 4:

1. Skillnad mellan sätten att skapa funktioner:
   - Jag använder funktionsdeklaration: function greet() { ... } 
     → Jag kan anropa den innan den är deklarerad i koden (hoisting).
   - Funktionsuttryck: const greet = function() { ... } 
     → Jag kan inte anropa den innan den är skapad.
   - Arrowfunktion: const greet = (name) => { ... }
     → Jag använder den för kort syntax, ofta i moderna projekt.
   Jag valde funktionsdeklaration för enkelhet och för att jag kan anropa den var som helst i scriptet.

2. Anrop av funktioner:
   - Jag kan anropa en funktionsdeklaration innan den finns i koden.
   - Funktionsuttryck och arrowfunktioner måste jag definiera innan jag anropar dem, annars får jag fel.

3. Parametern vs variabel:
   - Parametern name inuti funktionen är en lokal variabel som bara finns inuti funktionen.
   - Variabeln name utanför är global och påverkas inte av parametrar inuti funktioner.
   - När jag ändrar parametern inuti funktionen ändras inte värdet på den globala variabeln.

4. Skillnaden mellan parameter, variabel och argument:
   - Parameter = namnet på värdet som jag skickar in i funktionen (t.ex. name i function greet(name)).
   - Variabel = ett namn jag använder för att lagra ett värde (t.ex. let name = "Mikaela").
   - Argument = värdet som jag skickar in till funktionen vid anrop (t.ex. "Kalle" i greet("Kalle")).
*/

/*
Uppgift 5
*/

console.log("\n\n\n=== Uppgift 5 – räknaren ===");


document.getElementById("räknaBtn").addEventListener("click", function () {
  console.log("=== Extrauppgift – Räknare ===");

  // 1. Jag hämtar två tal via prompt när knappen klickas
  // (Man kan använda även inputfält istället)
  let input1 = prompt("Skriv in första talet:");
  let input2 = prompt("Skriv in andra talet:");

  // Jag kontrollerar att det första värdet är giltigt
  if (!input1 || isNaN(input1)) {
    console.log("Fel: Första värdet är ogiltigt.");
    return; // Jag avbryter om värdet inte är korrekt
  }

  // Jag kontrollerar att det andra värdet är giltigt
  if (!input2 || isNaN(input2)) {
    console.log("Fel: Andra värdet är ogiltigt.");
    return; // Jag avbryter även här om värdet inte fungerar
  }

  // Jag omvandlar båda värdena till nummer
  const num1 = Number(input1);
  const num2 = Number(input2);

  // 2. Jag gör mina beräkningar
  const summa = num1 + num2; // Jag räknar ut summan
  const produkt = num1 * num2; // Jag Multiplicerar talen
  const lika = num1 === num2; // Jag tar reda på om talen är exakt lika

  // 3. Jag skapar tre olika format för resultatet
  const textResultat = `Summan är ${summa}, mulitiplication ${produkt}, och talen är lika: ${lika}`;

  const arrayResultat = [summa, produkt, lika];

  const objektResultat = {
    summa: summa,
    produkt: produkt,
    lika: lika,
  };

  // 4. Jag skriver ut allt i konsol
  console.log("=== Strängresultat ===");
  console.log(textResultat);

  console.log("=== Arrayresultat ===");
  console.log(arrayResultat);

  console.log("=== Objektresultat ===");
  console.log(objektResultat);

  // Jag visar även objektet i tabellform för tydlighet
  console.log("=== Objekt i tabellform ===");
  console.table(objektResultat);
});
