////////////////////////////strings
/*let string = "strings" ;    //variable declaration, after = definitions
let sentence = "Hello " + "Junshen";
let sentence2 = + " and Emu";
//console.log(sentence + sentence2);

const longSentence = `${sentence} and ${sentence2} are amazing!` //Yemplate Literal or Template String

///////////////////////////Numbers or Integers

let year = 2020;
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farfuture = 2020 * 50;

/////////////////////////Booleans
let trueStatement = true; //1
let falseStatement = false; //0


/////////Null and Undefined
let Ron; //yes declaration, no definition, undefined
//console.log(Sarah) not defined, may be spelling error or no declaration, NULL

/////////////////////Boolean Logic
let student = "Caroline";
let age = 15;
//console.log(student === "Caroline"); //true
//console.log(student === "caroline"); //false
//console.log(age === "15"); //false, triple is exact, double converts to same type
//console.log(age < 17 || age > 19); //true, OR
//console.log(age < 17 && age > 19); //false, AND
console.log(15 == "15");

//////////////////////////////////if statements

let school = "Middle";

if(school === "Elementary"){
    console.log("You are in k-5");
} else if(school === "Middle"){
    console.log("You are in 6,7,8")
} else{
    console.log("you are in high school")
}

let ron = "Ron";
console.log(ron !== "Ema"); */

/////////////////Formative Assessment: stoplight

/*let stopLight = "orange";

if(stopLight === "green"){
    console.log("GO");
} else if(stopLight === "yellow"){
    console.log("CAUTION");
} else if(stopLight === "red"){
    console.log("STOP");
} else{
    console.log("that aint a stoplight color :/");
}; */


////////////////////FA: Milk

/*let kristy = "tol";
let bao = "tol";

if(kristy === "intol" && bao === "intol"){
    console.log("almond milk for both");
} else if(kristy === "intol" || bao === "intol"){
    console.log("one milk, one almond milk");
} else{
    console.log("both milk :)")
} */

//////////////////FA: cupcake

/*
let temp = 76;

if(temp < 68){
    console.log("too cold!");
} else if(temp >= 68 && temp<=72){
    console.log("perfect!");
} else if(temp >= 73 && temp<=76){
    console.log("warm!");
} else{
    console.log("too hot!");
}  */

//////////////////////////////////////DAY 2

/////////////////// Functions

/*function test() {
    console.log("TEST")
}
test();*/

/*function argument(argument) {
    console.log(argument);
}
argument("argument");*/

/*const  add = function(x,y ){
    return x+y; //immediatly ends function
}
console.log(add(10,3))*/

/*const hello = function(){
    alert("hello");
};
hello();
const bye = function(){
    alert("bye");
};

const beatles = function(){
    hello();
    bye();
    hello();
    bye();
};
beatles();*/

/*function hello(){
    const name = "Sarah"
    function displayName(){
        alert(name)
    }
    return displayName()
}

hello()
*/
////////////////////////scope
/* const name = "michael y" //global space
function makeFunc(){
    const name= "sarah"   //function scope
    function displayName(){
        console.log(name) //reaches up for local name, if none then global
    }
     return displayName //cant call and return
}
const myFunc = makeFunc()  //closure
myFunc()// no more makeFunc available bc youre returning it
 */

////////////////////////////arrays
const names = ["diego", "frid", "christian",
"val", "haoran"]

//names.push("caroline")
//names.unshift("brian")
names.forEach(name => console.log(name)) // =>immediately returned
//some = is there some representation, returns true or false

//////////////spread operator

const numbers = [1,2,3]

const add = function(x, y, z){
    return x+y+z
}

console.log(add(...numbers)) //pass every el in array with ...