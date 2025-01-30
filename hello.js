// count the number of digit

function commonDigits(num1,num2){
    let num1Length = num1.toString().replace("-", "").length;
    let num2Length = num2.toString().replace("-", "").length;
    if(num1Length == num2Length )
        {
            console.log(true);
            return true;
        }
    else{
         console.log(false);
            return false;
    }
}
commonDigits(1234,1234)

// last digit 

function lastDigit(num1 , num2){
    let lastDigit1 = num1 % 10;
     let lastDigit2 = num2 % 10;
           if(lastDigit1 == lastDigit2){
             console.log(true);
             return true;
         }else{
             console.log(false);
             return false;
         }
 }
 lastDigit(29,27)

//  Array

const mathmarks = [20,50,60,40,50];
console.log(mathmarks);

const student = ["pranali",2002,84.40, "reading"];
console.log(student);

// 2nd type of declaration array

const arr = new Array('priya','roshni','renuka');
console.log(arr)

// array in js dynamic

const cities = ["mumbai","delhi"," jaipur","chennai", "kolkata"];

console.log(cities.length);

cities[4] =" calcata";
console.log(cities);


// adding an event
// push()
const team = ['csk','rcb','mi','lsg'];
constpushArray = team.push('GT');
console.log(team);

// unshift
team.unshift('kkr');
console.log(team);

// removing an element
// pop
team.pop();
console.log(team);

// shift
team.shift();
console.log(team);


