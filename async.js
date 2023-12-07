// sync matlab ek ke baad dusra hoga, jab-tak ek command complete naa ho, dusra shuru nahi hoga => sunchronous code
// async matlab saare kaam ek saath shuru kar do , jiska answer pehle aa jaaye uska jawaab de dena....koi order nahi hai, jo kaam pehle ho jayega uska answer pehle aa jayega
// setTimeout(callback, timeIn_ms)
console.log("heyy");

setTimeout(function () {
    console.log("heyy3");
}, 2000) //ye line turrant chal jaati hai
console.log("heyy2");

// pehle heyy chalega fir turrant heyy2 chal jayega
// heyy3 do sec ke baad chalega
// callback function => turant nahi chal raha hai, it waits, 2 sec ke baad isse callback kiya jayega
// callback functions humesa async code mein answer aane par chalta hai => ex: tumne facebook pe request bheji, 5 sec ke baad uska answer aaya, 5 sec ke baad kya chalega?? - callback function