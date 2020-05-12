// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    Counter1 makes use of closure by using a parent variable called through a child function. 
 *    Counter2 uses a globally scoped variable to use so that it can be accessed/changed throughout the whole file.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    Counter1 uses a closure because it calls a parent variable through it.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Counter1 could be useful if you didn't want it be incremented or changed in any way other than through Countermaker().
 *    Counter2 could be userful if you wanted to do something else to count or use it in a different function later on.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
//console.log(counter1(5));
//console.log(counter1(6));
// counter2 code
//let count = 0;

//function counter2() {
 // return count++;
//}
//console.log(counter2());
/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  
  const randomNum = Math.floor(Math.random() * 2);
  return randomNum;

}

console.log(inning(5));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, innings){
  let homeScore = 0;
  let awayScore = 0;
  for (let x=0; x<innings; x++){
    homeScore += callback();
    awayScore += callback();
  }
  return ("Home : " + homeScore + ", Away : " + awayScore);

}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(getInningScore, inning, numInnings) {
  let homeScore = 0;
  let awayScore = 0;

  for(let i = 1; i <= numInnings; i++){
    homeScore += inning();
    awayScore += inning();
    console.log(getInningScore(awayScore, homeScore, i));
  }
  
  console.log("\nFINAL SCORE: " + awayScore + " - " + homeScore);
}
function getInningScore(away, home, inning){
  if(inning === 1){
    return (inning + "ST Inning: " + away + " - " + home);
  }else if(inning === 2){
    return (inning + "ND Inning: " + away + " - " + home);
  }else if(inning === 3){
    return (inning + "RD Inning: " + away + " - " + home);
  }else {
    return (inning + "TH Inning: " + away + " - " + home);
  }
}

scoreboard(getInningScore, inning, 9);