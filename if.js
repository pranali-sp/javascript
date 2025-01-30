// if stateme

// print number is even if num is even

let num1 = prompt('plese enter the number');

if(num1 % 2 == 0){
    console.log('number is even');
}
else{
    console.log('number is odd');

}
console.log('outeside i-else');



// if else-if

let month = prompt('enter the month number');

if( month>=1 && month<=3){
    console.log('first quater');
}

else if(month>=4 && month<=6){
    console.log('second quater');
}
else if(month>=7 && month<=9){
    console.log('third quater');
}
else if(month>=10 && month<=12){
    console.log("fourth quater");
}


// Email varification
// input an email
// length o the email
//  after . only 2 or 3 charecter allowed
//  minimum 3 charecter between . and @ 

const email = prompt("enter the email address")

const emailLen = email.length;

const dotIndex = email.lastIndexOf(".")

const atIndex =email.lastIndexOf("@")

const lastIndex = emailLen-1;

if( emailLen < 11 || 
    lastIndex - dotIndex > 2 ||
    lastIndex - dotIndex > 3 ||
     dotIndex - atIndex < 3){
        console.log('invalid email');
     }


// netedif statement

// check eeligibility for driving liacence 
// age>= - eligible  else not eligible 
// passed the test eligible and can obtain the liacence 
// failed the test- eligible but cannot have liacence

let age = 18;
let testPassed = true;

if(age>=18){
    console.log("elgible for the licence!");
    if(testPassed == true){
        console.log("congratulation !  you have got licence");

    }
    else{
        console.log("sorry you did not clear the test.");
    }
    
}
else{
    console.log("not eliible for he liacence");
}
//  switch case -program

let color = 'red';

switch(color){
    case "red" :console.log("Stop! the light is red");
    break;

    case "yellow" :console.log("CAUTION! the light is yellow");
    break;

    case "green" :console.log("Go AHEAD!");
    break;

    default :
     console("invalid color !");
}

// teration - for loop
// print a msg 10 times
let j;
for(let j=1; j<=50; j++){
    console.log('j');
}



function sumOfEvenNumbers(limit) {
    console.log("limit--", limit);
  // Initialize sum to store the sum of even numbers
  let result = 0;

  // Iterate through numbers from 1 to the given limit
   
    for( let i = 1; i <= limit; i++){
        console.log("iteration", i);
  // Check if the current number is even
        if(i % 2 == 0){
            
  // If even, add it to the sum
            console.log("even", i);
            result  += i ;
            console.log("result" , result);
        }
    }
	console.log(result);
  // Return the sum of even numbers
  return result;
}

 sumOfEvenNumbers(6);

// prime or not

let num = 5;

for(let i = 2; i < num; i++){
  if(num % i == 0){
    console.log("not prime");
  }
  else{
    console.log("prime")
  }
}

// print all the even number 50

let i = 2;
for(;i<=50; i+=2){
  console.log(i);
}
 

// composite Number


function Composite(number) {
  let answer; // This variable will store the result (true or false)

  // Initialize a variable to count the number of factors
    let count = 0;

  // Loop through all integers from 1 up to 'number'.
    for(i = 0; i<=number;i++){
        if( number % i == 0){
  // Increment the count for each integer that is a divisor of 'number'

            count++;
        }
    }
    

  // After the loop, check if the count of factors is more than 2
     if(count > 2){
        answer = true; 
     }
    else{
        answer = false;
    }
	 console.log(answer)
  // Return the result
  return answer;
}
Composite(20)


// do-while loop

// guess the number

let guessNum;

do{
  guessNum = prompt("guess the number :");
  if(guessNum == randomNum){
    console.log('guessed correctly !!');
  }else{
    console.log('take another guessed!!');
  }
}while(guessNum != randomNum)

function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  // let answer = principalAmount; // Initialize with the principal amount
  let year = 0;

  // Use a while loop to calculate the compound interest over the given period
  while (year < numberOfYears) {
    // Calculate interest for the current year and add it to the total amount
    principalAmount += principalAmount * annualInterestRate;
    year++;
  }

  // Return the final accumulated amount
  return principalAmount;
}

// Example Usage
const principalAmount = 500; // Initial deposit
const annualInterestRate = 0.08; // Interest rate as a decimal
const numberOfYears = 5; // Time period in years

const totalAmount = compoundInterest(principalAmount, annualInterestRate, numberOfYears);
console.log(totalAmount); // Expected Output: 734.66
