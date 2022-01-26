// function animateValue(id, start, end, duration) {
//     if (start === end) return;
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// animateValue("value", 100, 25, 5000);

// (function () {
//     const second = 1000,
//           minute = second * 60,
//           hour = minute * 60,
//           day = hour * 24;

//     //I'm adding this section so I don't have to keep updating this pen every year :-)
//     //remove this if you don't need it
//     let today = new Date(),
//         dd = String(today.getDate()).padStart(2, "0"),
//         mm = String(today.getMonth() + 1).padStart(2, "0"),
//         yyyy = today.getFullYear(),
//         nextYear = yyyy + 1,
//         dayMonth = "09/30/",
//         birthday = dayMonth + yyyy;

//     today = mm + "/" + dd + "/" + yyyy;
//     if (today > birthday) {
//       birthday = dayMonth + nextYear;
//     }
//     //end

//     const countDown = new Date(birthday).getTime(),
//         x = setInterval(function() {

//           const now = new Date().getTime(),
//                 distance = countDown - now;

//           document.getElementById("days").innerText = Math.floor(distance / (day)),
//             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//           //do something later when date is reached
//           if (distance < 0) {
//             document.getElementById("headline").innerText = "It's my birthday!";
//             document.getElementById("countdown").style.display = "none";
//             document.getElementById("content").style.display = "block";
//             clearInterval(x);
//           }
//           //seconds
//         }, 0)
//     }());

// (function () {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;

//   //I'm adding this section so I don't have to keep updating this pen every year :-)
//   //remove this if you don't need it
//   let today = new Date(),
//     currentTimeInMinutes = String(today.getMinutes()).padStart(2, "0"),
//     endTimeInMinutes = String(today.getMinutes() + 1).padStart(2, "0"),
//     dd = String(today.getDate()).padStart(2, "0"),
//     mm = String(today.getMonth() + 1).padStart(2, "0"),
//     yyyy = today.getFullYear(),
//     nextYear = yyyy + 1,
//     dayMonth = "09/30/",
//     birthday = dayMonth + yyyy;

//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
//     birthday = dayMonth + nextYear;
//   }
//   //end

//   let startTime = currentTimeInMinutes;
//   let endTime = endTimeInMinutes;
//   let timeInSeconds = new Date().getSeconds();

//   console.log(startTime);
//   console.log(endTime);
//   console.log(birthday);
//   console.log(timeInSeconds);

//   const countDown = new Date(birthday).getTime(),
//     x = setInterval(function () {
//       const now = new Date().getTime(),
//         distance = countDown - 60;
//       (document.getElementById("minutes").innerText = Math.floor(
//         (distance % hour) / minute
//       )),
//         (document.getElementById("seconds").innerText = Math.floor(
//           (distance % minute) / second
//         ));

//       //do something later when date is reached
//       if (distance < 0) {
//         // document.getElementById("headline").innerText = "It's my birthday!";
//         // document.getElementById("countdown").style.display = "none";
//         // document.getElementById("content").style.display = "block";
//         clearInterval(x);
//       }
//       //seconds
//     }, 0);
// })();

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
        style.transition = "transform .5s ease-in-out, top .8s, opacity .3s";
        otherBallot = document.getElementById("yay");
        otherBallot.style.transition = "transform .5s ease-in-out, top .8s, opacity .5s ease-out .3s";
        otherBallot.style.opacity = "0";
    }

}

// TODO:
// Trigger end state after timer runs out
// Add animations
// Add interactions
