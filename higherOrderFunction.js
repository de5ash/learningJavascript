// Higher Order Functions
// Higher Order Functions are the functions  which accept a function in a parameter or return a function or both.
// ex :
function abcd(val) {

}

abcd(function () { })

// or

function abcde() {

    return function () { }
}
abcde()

// Where do we write such code in real world => when we make closures

// ex: ForEach method always takes another function inside it, so ForEach is a higher order function =>

var arr = [1, 2, 3, 4, 5];
arr.forEach(function () { })