
// 1) A function that finds whether a given number n is divisible by 3 or 7.

let m = 43

divide(m);

function divide(n) {
    if (n % 3 == 0 && n % 7 == 0) {
        console.log("divide")
    }
    else {
        console.log("not divide")
    }
}

// 2) A positive number is received by the function, and the function must calculate and return the factorial of the received number.

let n = 6

factorial(n);

function factorial(x) {


    let fact = 1;
    for (let i = 1; i <= x; i++) {

        fact *= i;

    }
    console.log(fact);
}


// 3) Write a function that calculates the sum of the squares of the even numbers in the range with any number elements.


let squareArray = [2, 3, 4, 5, 6, 7, 8]

squarePlus(squareArray);


function squarePlus(array) {
   
    let sum = 0;
   
    for (let i = 0; i < array.length; i++) {
       
        if (array[i] % 2 == 0) {
        sum += Math.pow(array[i], 2)
          
        }

    }
    console.log(sum);
}     

// 4) Mail and password will be sent to Funtiona. If the email is the same, to cavid@code.edu.az and if the password is the same, to 12345, "Logged in" should be written on the screen, otherwise, "The email or password is incorrect" should be written.

let email = "cavid@code.edu.az";
let code = "12345";

checkMail(email, code);

function checkMail(mail , password) {

    if (mail == "cavid@code.edu.az" && password == "12345") {
        console.log("Girish olundu");
    }
    else{
        console.log("Mail ve yaxud password sehvdir");
    }
}

// 5) The function receives an array consisting of numbers, the function must return the sum of the single numbers in that array.

let oddArray = [2, 3, 4, 5, 6, 7, 8]

oddSumNums(oddArray);


function oddSumNums(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i] % 2 == 1) {
         sum += array[i];
       }
        
    }
    console.log(sum);
}

// 6) The function receives an array consisting of numbers, the function must return the number of double numbers in that array.

let evenArray = [2, 3, 4, 5, 6, 7, 8]

evenCountNums(evenArray);


function evenCountNums(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i] % 2 == 0) {
         count ++;
       }
        
    }
    console.log(count);
}