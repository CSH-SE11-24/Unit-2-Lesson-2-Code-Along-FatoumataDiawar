// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
//let user = prompt("What's the day of the week?")
//user.toLowerCase// changes string to be lower case

//if(user === "saturday" || user === "sunday"){
  //console.log("It's the weekend, yay!!!")
//}else{
 // console.log("It's a week dat, yay school!!!!")
//}

// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
//let age = prompt("What is your age?")
//age= parseInt(age)

//if (age < 0){
  //console.log("That is not an age")
//}
//if (age<= 12){ 
  //console.log("You are a child!!!!")
//}else if (age <= 18){
//  console.log("You are a teen...")
//}else{
  //console.log("RIP you lived a good life.")
//}

// WHILE LOOPS
// Print 1 to 5

//let i = 1
//while(i <= 5){
  // console.log(i)
  //i++
//}



// Print from a certain number to 1
let num = prompt("Enter a number.")
num = parseInt(num)
 while (num > 0){
   console.log(num)
   num--
 }



// Summing up to 5
 let sum = 0// we will be adding numbers to this variable
let counter = 1
 while (counter <= 5){
   sum = sum + counter
   counter++
 } 
console.log ("The sum of 1-5 is", sum)



// Using prompt
let mysteryStudent = "zyaire"
let user2 = prompt("Enter a student's name").toLowerCase()
// Keeps running if what the user entered IS NOT equal to mysteryStudent.
 while( mysteryStudent !== user2 ){
   //we have to RE-ASSIGN user to be the new value
   user2 = prompt ("Try again, Guess a different student!")
 }
console.log("Good Job!!")

