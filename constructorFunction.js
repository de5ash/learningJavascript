// CONSTRUCTOR FUNCTION => 

function saanchaOfBiscuit() {
    this.width = 12;
    this.height = 22;
    this.color = 'brown';
    this.taste = "sugary";
}

new saanchaOfBiscuit(); //is line se ek naya biscuit banega
//har baar new user karne pe same properties ka ek naya biscuit banega => a new instance of that biscuit
var bis1 = new saanchaOfBiscuit();
var bis2 = new saanchaOfBiscuit();
var bis3 = new saanchaOfBiscuit();

// normal function jismein "this" ka istemaal ho and aap function ko call karte waqt "new" keyword ka use karein
// this by deafault points at window
// now what is window ? jaha pe aapke saare browser se related features hote hain
// This ke saath uss biscuit me kya kya chahiye vo hum likh lenge

// jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties wale bahut saare elements banane hain uss waqt aap constructor function use kar sakte ho

// another example:
function circularButtonBanao(color) {
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

var redbtn = new circularButtonBanao("red");
var greenbtn = new circularButtonBanao("green");
var yellowbtn = new circularButtonBanao("yellow");

// Professionally => A function which whenever invoked with "new" keyword, returns an object, if we use "this" keyword inside that function, it returns an object with all of the properties and methods mentioned inside that function with this keyword , Such a function is called a constructor function.
// new keyword infront of a function call makes a new blank object.

