// example of bind---->
function sum (a, b) {
    return this.a + this.b;
}

const addition = sum.bind({ a: 10, b: 40});
console.log(addition());
//biding a function with a fix parameter
function fixSum (a, b) {
    return a + b;
}
const res = fixSum.bind(null, 40);
console.log(res(5));

////biding a function with fixed parameters
function fixedSum (a, b) {
    return a + b;
}
const test = fixedSum.bind(null, 40, 7);
console.log(test());



/// -----> Call --------->
function intro (greetMsg) {
    const constants = [greetMsg, "My name is", `${this.name}.`, "I am a", `${this.designation}.`];
    console.log(constants.join(" "),);
}
const object = { name: "Durgesh", designation: "Software Developer"}
intro.call(object);
intro.call(object, "Hey there!");

///----> Apply ----->

function introAdvanced (...data) {
    const constants = [...data, "My name is", `${this.name}.`, "I am a", `${this.designation}.`];
    console.log(constants.join(" "));
} 
introAdvanced.apply(object, ["Hey", "there", "!"]);