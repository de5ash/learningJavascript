// new => jab bhi new lagta hai, hamesa ek black object apne mann me imagine kar lo
{

}
// new ke baad jo bhi likha hai vo chalao, vaise to maximum cases me new ke baad ek function hii likha jata hai

// ex:
function abcd() {
    this.age = 12;
}

new abcd()

//  new aaya hai to mann me ek black object bana lenge pehle
//  new keyword ke baad abcd function likha hai to vo chalega
//  ab abcd ke andar jaao => abcd func me jaha jaha bhi "this" hai vaha vaha black object ko maan lo {} uss black object me kya hoga, this ke saamne vali value, iss case me age = 12, which means blank object => {age : 12}

// so new keyword creates blank object for the constructor function that is being called just after the new keyword