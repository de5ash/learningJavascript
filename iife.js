// IIFE => Immediately Invoked Function Expression
// IIFE hai function ko turant chalane ki qala, is tarike se ki humlog koi private variable bana paaye

(function () {
    var a = 12
})()

console.log(a); //a is not defined, cuz here a is a private variable

// how to access

var ans = (function () {
    var privateVal = 12;


    return {
        getter: function () {
            console.log(privateVal);
        },
        setter: function (val) {
            privateVal = val;
        }
    }
})()

// privateVal variable sirf iffe ke andar access ho sakta hai
// flow: since ye ek iffe hai to bante hii chal gaya hoga, and ek variable uske andar bana hoga privateVal naam se and humne return kiya hai ek object, aur ye object kaha gaya hoga "ans" variable me,
// object ke andar kya hai => getter(iska matlab hota hai value ko print karna) hai
