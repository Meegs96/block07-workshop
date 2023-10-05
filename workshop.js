/* i will use the arithmetic operatiors to 
solve for the lock combinations and then
create an alert pop up that informs the user 
of said combination to unlock it. */

const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination.";
// when i use the keyword message, the message needed will appear


// create pop up box that says the messaged required



let lockNumber1 = (400000/4000/10)
console.log(lockNumber1)
//expcted outcome = 10



let lockNumber2 = (128*128/ 16 - 984)
console.log(lockNumber2)
//expected outcome = 40 


let lockNumber3 = (39*18 / 9 /6 + 26)
console.log(lockNumber3)
//expected outcome = 39 

const strComplete = `Welcome! ${message} ${lockNumber1} ${lockNumber2} ${lockNumber3}!`;
// expected outcome: put the worded message and lock combination altogether

alert(strComplete) 
//expected outcome: alert popup should say everything in the strComplete Concatenation

