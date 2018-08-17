"use strict"

alert("Welcome to the ultimate test of Japanese cultural knowledge! Make the right choices in a variety of scenarios.");

function runGame() {

function chooseScenario() {
  let scenarioChoice = rollDice(2);
  let scenarioArray = ["eating", "at the onsen","greeting a business associate"];
  let scenario = scenarioArray[scenarioChoice];
    return scenario;
}

let chosenScenario = chooseScenario();
console.log ("Your scenario will be " + chosenScenario);

function getBusinessResults() {
  if (chosenScenario === "greeting a business associate") {
    let businessArray = ["business card", "greeting"];
    let businessPromptResult = prompt("What would you like to do? Type type 0 to exchange business cards.  Type 1 to greet someone for the first time.");
    let businessSelection = businessArray[parseInt(businessPromptResult)];
    return businessSelection;
  }
}
let businessChoice = getBusinessResults();
if (chooseScenario === "greeting a business associate") {
  console.log("you chose" + businessChoice);
}

function getCardChoices() {
        if (businessChoice === "business card") {
        let promptBusinessCard = prompt("You're given a business card.  What do you do with it? Type 0 for ohhh and ahhh over it for a good 2 minutes. Type 1 to accept it with both hands.  type 2 to shove it in your back pocket.");
        let businessCardChoicesArray = ["ooh and ahh" , "take it with two hands" , "put it in your back pocket"];
        let businessCardOutcome = businessCardChoicesArray[parseInt(promptBusinessCard)];
        return businessCardOutcome;
      }
    }
let businessCardChoice = getCardChoices()
if (businessChoice === "business card") {
  console.log ("You chose " + businessCardChoice);
  }
function getBusinessCardResults() {
    let businessCardChoicesArray = ["ooh and ahh" , "take it with two hands" , "put it in your back pocket"];
          if (businessCardChoice === businessCardChoicesArray[0]) {
            console.log ("while oohing and ahhing could be seen as polite, it's still strange.  Let's roll to see how weirded out they are...");
            return determineWinner();
          }
          if (businessCardChoice === businessCardChoicesArray[1]) {
            console.log ("This is correct!  Japanese people treat business cards with a great deal of respect.  You have shown that by taking it with two hands. You have won " + getPrize());
          }
          if (businessCardChoice === businessCardChoicesArray[2]) {
            console.log ("Oh no! The horror!  Looks like you don't care at all about the card.  Roll to save face!");
            return determineCritWinner();
          }
          }

  //let yourBusinessCardDecision = getBusinessCardResults();
  if (businessChoice === "business card") {
    //console.log (yourBusinessCardDecision);
    getBusinessCardResults()
    }
function getGreetingChoices() {
      if (businessChoice === "greeting") {
        let promptGreeting = prompt("You meet Mr. Sato for the first time.  What do you do? Type 0 for shake his hand. Type 1 to bow respectfully.  Type 2 to give him a high five.");
        let greetingChoicesArray = ["shake hands" , "bow" , "high five"];
        let greetingOutcome = greetingChoicesArray[parseInt(promptGreeting)];
        return greetingOutcome;
      }
    }
let greetingChoice = getGreetingChoices()
if (businessChoice === "greeting") {
  console.log ("You chose " + greetingChoice);
}
function getGreetingResults() {
    let greetingArray = ["shake hands" , "bow" , "high five"];
          if (greetingChoice === greetingArray[0]) {
            console.log ("It's polite, but not best practice since handshakes are not costumary in Japan. Let's roll to see if Mr. Sato is offended.");
            return determineWinner();
          }
          if (greetingChoice === greetingArray[1]) {
            console.log ("This is correct!  You should bow when you greet.  The higher the Mr. Sato's status, the lower you would bow.  For your business acumen, you get a " + getPrize());
          }
          if (greetingChoice === greetingArray[2]) {
            console.log ("really?!  A high five?  We're not on an episode of Jersey Shore. Roll to save face!");
            return determineCritWinner();
          }
          }
  //let yourGreetingDecision = getGreetingResults();
  if (businessChoice === "greeting") {
    //console.log (yourGreetingDecision);
    getGreetingResults();
        }

function getOnsenResults() {
  if (chosenScenario === "at the onsen") {
    let onsenArray = ["prepare for bath", "in the bath"];
    let onsenPromptResult = prompt("What would you like to do?  Type 0 to get ready for a hotsprings bath.  Type 1 to get into the bath");
    let onsenSelection = onsenArray[parseInt(onsenPromptResult)];
    return onsenSelection;
  }
}
let onsenChoice = getOnsenResults();
if (chosenScenario === "at the onsen") {
  console.log ("You chose " + onsenChoice);
}

function getGettingReadyChoices() {
      if (onsenChoice === "prepare for bath") {
        let promptGettingReady = prompt("You want to get into the hot spring.  How are you going to do it?  Type 0 to jump in in your bathing suit.  Type 1 to shower and get in sans bathing suit. Type 2 to start doing laps.")
        let gettingReadyChoicesArray = ["jump in" ,"shower", "swim laps"];
        let gettingReadyOutcome = gettingReadyChoicesArray[parseInt(promptGettingReady)];
        return gettingReadyOutcome;
      }
    }
let gettingReadyChoice = getGettingReadyChoices()
if (onsenChoice === "prepare for bath") {
  console.log ("You chose " + gettingReadyChoice);
}
function getGettingReadyResults() {
    let gettingReadyChoicesArray = ["jump in" ,"shower", "swim laps"];
          if (gettingReadyChoice === gettingReadyChoicesArray[0]) {
            console.log ("You're not allowed to wear bathing suits in the onsen (they are NOT co-ed.  Don't panic!) It's also never great to do a cannonball in a spa, you weirdo. Roll to save face!");
            return determineCritWinner();
          }
          if (gettingReadyChoice === gettingReadyChoicesArray[1]) {
            console.log ("This is correct!  You want to be clean first and then soak.  This is the way Japanese people use their bathtubs at home too." + getPrize());
            return getPrize();
          }
          if (gettingReadyChoice === gettingReadyChoicesArray[2]) {
            console.log ("no laps.  It's supposed to be relaxing.  Let's roll to see how annoyed people are ");
            return determineWinner();
          }
                                }
//  let yourGettingReadyDecision = getGettingReadyResults();
  if (onsenChoice === "prepare for bath") {
//    console.log (yourGettingReadyDecision);
getGettingReadyResults();
  }
  function getInTheBathChoice() {
      if (onsenChoice === "in the bath") {
        let promptInTheBath = prompt("You're in the hotsprings now.  Here's a seemingly random question:  Do you have a tattoo?  Type 0 for yes and 1 for no");
        let inTheBathChoicesArray = ["tattoo", "no tattoo"];
        let inTheBathOutcome = inTheBathChoicesArray[parseInt(promptInTheBath)];
        return inTheBathOutcome;
      }
    }
let inTheBathChoice = getInTheBathChoice()
if (onsenChoice === "in the bath") {
  console.log ("You chose " + inTheBathChoice);
}
function getInTheBathResults() {
    let inTheBathChoicesArray = ["tattoo", "no tattoo"];
          if (inTheBathChoice === inTheBathChoicesArray[0]) {
            console.log ("Uh oh!  Most Japanese people don't have tattoos because they are associated with the Yakuza (Japanese mafia)! In fact, you are not supposed to be in the bath if you have them. Roll to see what happens. ");
            return determineWinner();
          }
          if (inTheBathChoice === inTheBathChoicesArray[1]) {
            console.log ("Good!  You're not allowed to have them in the onsen.  For not being tattooed, you get a " + getPrize());
          }
        }
  //let yourInTheBathDecision = getInTheBathResults();
  if (onsenChoice === "in the bath") {
    //console.log (yourInTheBathDecision);
    getInTheBathResults();
  }
function getEatingOutcomes() {

       if (chosenScenario === "eating") {
         let eatingArray = ["noodles", "rice"];
         let promptResult = prompt("What are you eating? type 0 for noodles, or 1 for rice");
         let foodSelection = eatingArray[parseInt(promptResult)];
         return foodSelection;
       }
}
let foodChoice = getEatingOutcomes();
if (chosenScenario === "eating") {
console.log ("you chose " + foodChoice);
}

function getNoodleChoices() {
      if (foodChoice === "noodles") {
        let promptEatNoodles = prompt("How would you like to eat your noodles? Type 0 for slurp them loudly. Type 1 to eat them quietly.  Type 2 to use a fork.")
        let noodleChoicesArray = ["slurp them loudly" , "eat them quietly" , "use a fork"];
        let noodleEatingOutcome = noodleChoicesArray[parseInt(promptEatNoodles)];
        return noodleEatingOutcome;
        }
      }
let noodleChoice= getNoodleChoices()
let noodleChoicesArray = ["slurp them loudly" , "eat them quietly" , "use a fork"];
if (foodChoice === "noodles") {
console.log ("you chose " + noodleChoice);
}

function getNoodleResults() {
          if (noodleChoice === noodleChoicesArray[0]) {
            console.log ("You made the right choice!  In Japan it is polite to slurp your noodles!  As a reward for your correct choice, you get a " + getPrize());
          }
          if (noodleChoice === noodleChoicesArray[1]) {
            console.log ("You did not honor the chef by showing your appreciation by slurping! Roll to see how offended he is. ");
            return determineWinner();
          }
          if (noodleChoice === noodleChoicesArray[2]) {
            console.log ("Oh no! You really looked like a dork!  Roll to save face!");
            return determineCritWinner();
          }
}
//let yourNoodleDecision = getNoodleResults()
  if (foodChoice === "noodles") {
  //console.log (yourNoodleDecision);
  getNoodleResults();
      }

function getRiceChoices() {
        if (foodChoice === "rice") {
          let promptEatRice = prompt("How would you like to eat your rice? Type 0 for by eating every grain. Type 1 for leaving your chopsticks sticking up straigt in the bowl.  Type 2 to eat with soy sauce.")
          let riceChoicesArray = ["by eating every grain", "by leaving your chopsticks sticking up straigt in the bowl", "with soy sauce"];
          let riceEatingOutcome = riceChoicesArray[parseInt(promptEatRice)];
          return riceEatingOutcome;}
        }
  let riceChoice= getRiceChoices()
  let riceChoicesArray = ["by eating every grain", "by leaving your chopsticks sticking up straigt in the bowl", "with soy sauce"];
  if (foodChoice === "rice") {
  console.log("you choose " + riceChoice);
}

  function getRiceResults() {
            if (riceChoice === riceChoicesArray[0]) {
              console.log ("You made the right choice!  It shows your expert chopsticks skills! You get: " + getPrize());
            }
            if (riceChoice === riceChoicesArray[1]) {
              console.log ("when you leave your chopsticks straight up, it reminds Japanese people of funerals!  They will give you some slack for being a foreigner. I hope. Roll to see what happens");
                return determineWinner();
            }
            if (riceChoice === riceChoicesArray [2]) {
              console.log ("Oh no! You're an American stereotype!  Not EVERYTHING needs sauce.  Roll to save face!");
                return determineCritWinner();

            }
          }
  //let riceResult = getRiceResults()
  if (foodChoice === "rice") {
  //console.log(riceResult);
  getRiceResults();
        }


function getPrize() {
  let prizeSelection = rollDice(9);
  let prizeArray = [
    "a square watermelon.",
    "a kimono.",
    "the world's tinniest paper crane.",
    "your own koi pond,",
    "1000 yen.",
    "a pair of disposable chopsticks.",
    "a paper fan.",
    "a painting of a geisha.",
    "3 free Japanese lessons.",
    "a one way ticket to Japan."
  ];
  let prize = prizeArray[prizeSelection];
    return prize;
    }

function determineWinner() {
  let computerTurn = rollDice(6);
  let userTurn = rollDice(12);

  alert("the computer rolled " + computerTurn);
  alert("you rolled " + userTurn);

if (computerTurn < userTurn) {
      console.log("Well, that wasn't the best choice you could have made, but nothing terrible happened!");
    } else {
        console.log("uh oh, this time your faux pas has earned you a consequence: " + getConsequence());
      }
    }

function getConsequence() {
  let consequenceSelection = rollDice(7);
  let consequenceArray = [
    "a pair of chopsticks!  But they are used.  Gross!",
    "a group of school aged girls giggle and take a picture that you're sure is now on the internet somewhere.",
    "you forget all the Japanese you know for the next ten minutes.",
    "your parents have decided to join you on your trip.  Yikes!",
    "you missed your train! Now you have to ride in the one so crowded it has an attendant to stuff you in!",
    "your origami  gets squished.",
    "you loose 1000 yen.",
    "an old man who only knows 10 words practices English with you your entire 90 minute train commute."];
  let consequence = consequenceArray[consequenceSelection];
    return consequence;
    //console.log ("Your consequence is... " + getConsequence());
}

function determineCritWinner() {

  let computerCritTurn = rollDice(20);
  let userCritTurn = rollDice(6);

  alert("the computer rolled " + computerCritTurn);
  alert("you rolled " + userCritTurn);

if (computerCritTurn > userCritTurn) {
      console.log("Yikes!  You lost the dice roll.  This is going to be bad. Here's your consequence: " + getCritConsequence());
    } else {
      console.log("Amazingly, nobody saw your loutish behavior.");
      }
    }

 function getCritConsequence() {
   let critConsequenceSelection = rollDice(3);
   let critConsequenceArray = [
     "The shame of your faux pas is felt through centuries in the collective consciousness of the Japanese people.",
     "You have to be a guest on a Japanese game show. Hope you like eels!",
     "You are mistaken for a famous Yakuza boss and taken to jail. It must have been that tattoo that threw them off!",
     "The Japanese government gets all of your money.  Good luck getting back home!"];
   let critConsequence = critConsequenceArray[critConsequenceSelection];
     return critConsequence;
 }

function rollDice(whichDie) {
  let diceResult = Math.floor(Math.random() * (whichDie+1));
  return diceResult;
}
}

runGame();

console.log ("Refresh to play again");
