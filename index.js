let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let countHome = 0
let countGuest = 0

let seconds = 0;
let minutes = 0;
let breaks = 0;
let intervalID;


function startTimer() {
  intervalID = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 10) {
      minutes = 0;
      breaks++;
    }
    const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = timeString;   }, 1000);
}
function stopTimer() {
    clearInterval(intervalID);
    seconds = 0;
    minutes = 0;
    breaks = 0;
    document.getElementById('timer').textContent = '00:00';
  }
function incrementH1(){
countHome +=1
homeScore.textContent = countHome
updateScore()
}
function incrementH2(){
countHome +=2
homeScore.textContent = countHome
updateScore()
}
function incrementH3(){
countHome +=3
homeScore.textContent = countHome
updateScore()
}

function incrementG1(){
    countGuest +=1
    guestScore.textContent = countGuest
    updateScore()
}
function incrementG2(){
    countGuest +=2
    guestScore.textContent = countGuest
    updateScore()
}
function incrementG3(){
    countGuest +=3
    guestScore.textContent = countGuest
    updateScore()
    }


function newGame(){
        countGuest = 0
        countHome = 0
        guestScore.textContent = countGuest
        homeScore.textContent = countHome
        updateScore()
        stopTimer()
    };

function updateScore(){
    if (countGuest > countHome) {
        document.getElementById("guestTitle").classList.add("highlight")
        document.getElementById("homeTitle").classList.remove("highlight")

    }
    else if( countHome > countGuest){
        document.getElementById("homeTitle").classList.add("highlight")
        document.getElementById("guestTitle").classList.remove("highlight")

    }
    else {
        document.getElementById("guestTitle").classList.remove("highlight")
        document.getElementById("homeTitle").classList.remove("highlight")
    }

}
