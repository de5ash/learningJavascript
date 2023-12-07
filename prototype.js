// prototypal inheritance =>
// make an object called human and put properties in it
var Human = {
    name: "Devashish",
    canFly: false,
    cantalk: true,
    willDie: true
}

// make another object called student, he can do all things which a human can do but he can do a few more things like, he can solve js questions and create modern websites, so we create extra two props which normal human can't do in that object and rest properties we will inherit from human.

var student = {
    solveJsQues: true,
    createModernWebsite: true
}

student.__proto__ = Human; // This line does the magic