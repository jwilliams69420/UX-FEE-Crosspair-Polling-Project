// TODO: replace getting vote logic with the util functions
//       Initialize Total votes with state instead of hardcode into HTML
//       Add logic to end vote once totalVotes = 50
//       Make svg border thicker
//       Add util functions to calculate percentages and set inner HTML to those values
//       Add util function to animate number incrementation
//       Add total votes below graphs
//       See if an IIFE can initialize state in HTML

/*
// REQUIREMENTS: 
    - Display a live percentage of the “yea” and “nay” votes
    - Display a live count of the total number of votes
    - Only one vote per person
    - Simulate voting: a random “yea” or “nay” vote will be cast at a random interval
    - Once 50 votes have been submitted or 1 minute has passed, voting is closed
    - When voting is complete, display the winning decision
    - Can be used on all device sizes from mobile to desktop
    - Should be accessible
*/

// (function () {
//   let el = document.getElementById("total-vote-number").innerHTML = "120";
//   console.log(el)
// })();

// function values(){
//   let element = document.getElementById("total-vote-number").innerHTML = "100";
//   console.log(element);
//   return element;
// }

// window.onload = values();

// window.onload = (function () {
//   let el = document.getElementById("total-vote-number").innerHTML = "120";
//   console.log(el)
// })();;

const initialState = {
  totalVotes: 0,
  nayVotes: 0,
  yayVotes: 0,
  percentageNayVotes: 0,
  percentageYayVotes: 0,
  pollQuestion: "",
  pollTimeRemaining: 0,
};

const selectedBallotTransition = "transform .7s ease-in, top .6s";
const unselectedBallotTransition =
  "transform .5s ease-in-out, top .8s, opacity .5s ease-out .3s";
const noOpacity = "0";

const NAY_PERCENTAGE = "nay-percentage";

const NAY_TOTAL = "nay-total";

const TOTAL_NAY_VOTES = "total-nay-votes";

const YEA_PERCENTAGE = "yea-percentage";

const YEA_TOTAL = "yea-total";

const TOTAL_YEA_VOTES = "total-yea-votes";

const getTotalVotes = (state) => state.totalVotes;
const getTotalNayVotes = (state) => state.nayVotes;
const getTotalYayVotes = (state) => state.yayVotes;
const getPercentageNayVotes = (state) => state.percentageNayVotes;
const getPercentageYayVotes = (state) => state.getPercentageYayVotes;
const getPollQuestion = (state) => state.pollQuestion;
const getInnerHTML = (elemID) => document.getElementById(elemID).innerHTML;
const setInnerHTML = (elemID, content) =>
  (document.getElementById(elemID).innerHTML = content);


//RANDOMIZER SOLUTION
let num;
let yay = 0;
let nay = 0;
let allVotes = 0;
let seconds = 60;
let timer;

let calcPercentage = (val) => {
  let result = val * 2;
  return result;
}

let incrementBarGraph = (val, selectionTotal, SelectionPercentage, selectionElem) => {
  let voteTotal = document.getElementById(selectionElem);
  document.getElementById(SelectionPercentage).innerHTML = String(calcPercentage(val)) + "%";
  document.getElementById(selectionTotal).innerHTML = String(val) + " " + selectionElem.slice(0, 3) + " votes";
  
  
  // if (selectionElem == "nay-total"){
  //   console.log("nay votes: " + val);
  // }

  // if (selectionElem == "yea-total"){
  //   console.log("yea votes: " + val);
  // }

  // nayTotal.style.transition ="height .7s ease-in,transform .7s ease-in,";
  voteTotal.style.height = String(calcPercentage(val)) + "%";
  // console.log( voteTotal.style.height)
  
}


let incrementVote = (vote) => {
  let total = vote + 1;
  console.log(vote);
  return total;
}

let randomVote = () => {
  let num = Math.random();
  if (num < 0.25) {
    yay = incrementVote(yay);
    allVotes = yay + nay;
    console.log("yea total: " + yay);
    console.log("nay total: " + nay);
    console.log("all votes total: " + allVotes);
    incrementBarGraph(yay, TOTAL_YEA_VOTES, YEA_PERCENTAGE, YEA_TOTAL);
} else {
  	nay = incrementVote(nay);
    allVotes = yay + nay;
    console.log("yea total: " + yay);
    console.log("nay total: " + nay);
    console.log("all votes total: " + allVotes);
    incrementBarGraph(nay, TOTAL_NAY_VOTES, NAY_PERCENTAGE, NAY_TOTAL);
}
 calcPercentage(nay);
 calcPercentage(yay);
}

// let countdown = () => {
// 	if (seconds > 0 && allVotes < 49) {
//     	seconds--
//        allVotes = yay + nay;
//       console.log("all votes: ", allVotes);
//       console.log("Total yeas: ", yay);
//       	console.log("Total nays: ", nay);
//       	console.log(seconds);
//     }else {
//     	clearInterval(timer);
//     }
// }
//randomVote();

// let voteTimer = setInterval(function () {
//   randomVote();
//   countdown();
// }, 1000);

// let seconds = 60;
// let timer;

function timerCountdown() {
  if (seconds < 60) {
    document.getElementById("timer").innerHTML =
      "0:" + String(seconds).padStart(2, "0");
  }
  if (seconds > 0 && allVotes < 50) {
    seconds--;
    // allVotes = yay + nay;
    // console.log("yea votes: " + yay);
    // console.log("yea: " + yay);
    randomVote();
    console.log("allVotes: " + allVotes)
    document.getElementById("total-vote-number").innerHTML = String(allVotes);
  } else {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Voting has Ended";
    document.getElementById("voting-header").style.display = "none";
  }
}

timer = setInterval(function () {
  timerCountdown(); 
  // randomVote();
  // incrementBarGraph(nay);
  // document.getElementById("total-vote-number").innerHTML = String(allVotes);
  // document.getElementById("total-yea-votes").innerHTML = String(yay);
  console.log(allVotes)
}, 10);

document.getElementById("timer").innerHTML = "1:00";
// document.getElementById("total-vote-number").innerHTML = "100";

function castVote(elem) {
  const id = elem.id;
  const style = elem.style;
  let graphContainer1 = document.getElementById("graphContainer1");
  let graphContainer2 = document.getElementById("graphContainer2");
  let yayTotal = document.getElementById("yay-total");
  let nayTotal = document.getElementById("nay-total");
  let totalVote = Number(
    document.getElementById("total-vote-number").innerHTML
  );
  style.top = "350px";
  // style.opacity = '0';
  style.transform = "rotate(-45deg)";

  // console.log(totalVote);
  // allVotes++;
  // console.log(totalVote);
  // document.getElementById("total-vote-number").innerHTML = String(allVotes);

  if (id == "yay") {
    otherBallot = document.getElementById("nay");
    otherBallot.style.opacity = "0";
    incrementVote(yay);
    incrementBarGraph(yay, TOTAL_YEA_VOTES, YEA_PERCENTAGE, YEA_TOTAL);
    allVotes = yay + nay
    // document.getElementById("total-vote-number").innerHTML = String(allVotes);
    console.log(allVotes)
  } else {
    style.transition = selectedBallotTransition;
    otherBallot = document.getElementById("yay");
    otherBallot.style.transition = unselectedBallotTransition;
    otherBallot.style.opacity = noOpacity;
    // incrementVote(nay)
  }

  graphContainer1.style.opacity = "1";
  graphContainer2.style.opacity = "1";
  graphContainer2.style.zIndex = "1";
  nayTotal.style.transition ="height .7s ease-in,transform .7s ease-in,";
  // yayTotal.style.transition ="height .7s ease-in,transform .7s ease-in,";
  nayTotal.style.height = String(calcPercentage(nay)) + "%";
  // nayTotal.style.height ="80%";

}



// window.addEventListener("DOMContentLoaded", function() {
//   initializeValues();
// });
