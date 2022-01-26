const state = {
    totalVotes: 152,
    nayVotes: 0,
    yayVotes: 0,
    percentageNayVotes: 0,
    percentageYayVotes: 0,
    pollQuestion: "",
    pollTimeRemaining: 0
}

const selectedBallotTransition = "transform .5s ease-in-out, top .8s, opacity .3s";
const unselectedBallotTransition = "transform .5s ease-in-out, top .8s, opacity .5s ease-out .3s";
const noOpacity ="0";

const getTotalVotes = (state) => state.totalVotes; 
const getTotalNayVotes = (state) => state.nayVotes;
const getTotalYayVotes = (state) => state.yayVotes;
const getPercentageNayVotes = (state) => state.percentageNayVotes;
const getPercentageYayVotes = (state) => state.getPercentageYayVotes;
const getPollQuestion = (state) => state.pollQuestion;
const getInnerHTML = (elemID) => document.getElementById(elemID).innerHTML;
const setInnerHTML = (elemID, content) => document.getElementById(elemID).innerHTML = content;

let seconds = 60;
let timer;

function timerCountdown() {
  if (seconds < 60) {
    document.getElementById("timer").innerHTML =
      "0:" + String(seconds).padStart(2, "0");
  }
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Voting has Ended";
  }
}

timer = setInterval(function () {
  timerCountdown();
}, 1000);

document.getElementById("timer").innerHTML = "1:00";

function castVote(elem){
    const id = elem.id;
    const style = elem.style;
    let totalVote = Number(document.getElementById("total-vote-number").innerHTML)
    style.top = '250px';
    style.opacity = '0';
    style.transform = 'rotate(-45deg)';
    totalVote++
    document.getElementById("total-vote-number").innerHTML = String(totalVote);

    if(id == "yay"){
        otherBallot = document.getElementById("nay");
        otherBallot.style.opacity = "0";
    }else{
        style.transition = selectedBallotTransition;
        otherBallot = document.getElementById("yay");
        otherBallot.style.transition = unselectedBallotTransition;
        otherBallot.style.opacity = noOpacity;
    }

}

