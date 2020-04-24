// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

console.log('Closure task 1');
console.log("myFunction can access external , because external is a global variable.nestedFunction can access internal ,because internal is declared inside myFunction and nextedFunction also is inside myFunction." );

// Explanation: 

//myFunction can access external , because external is a global variable.
//nestedFunction can access internal ,because internal is declared inside myFunction 
//and nextedFunction also is inside myFunction. 


/* Task 2: Counter */

/* Create a function called `factorial` that accepts a parameter and uses a counter to return the 
factorial of that number. 
For example, `factorial(4)` should return 10 because 1+2+3+4 is 10. */

function factorial(info){
  let result=0;
 return function counter(number){
   let temp=0;
    for(let i=1;i<=number;i++){
      temp =temp+i;
    }
    result=temp;
    return result;
 }

}
console.log('Closure task 2');
console.log(`The factorial of 5 is ${factorial('fractorial')(5)}`);