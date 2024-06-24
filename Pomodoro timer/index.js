const timerEl = document.querySelector(".timer")
const startbuttonEl= document.querySelector(".start-btn")
const stopbuttonEl= document.querySelector(".stop-btn")
const resetbuttonEl= document.querySelector(".reset-btn")
let timeInterval;
let timeLeft = 1500;

function updateTime(){
    let minutes= Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2,0)}`
    timerEl.innerHTML = formattedTime
}
 
function startTimer(){
    timeInterval = setInterval(()=>{
        timeLeft--  //decrease time by 1 every one second
        updateTime()
        if(timeLeft=== 0){
            alert("Times Up! Take  A Break")
            clearInterval(timeInterval)
            timeLeft = 1500
            updateTime()

        }
         
    }, 1000)

}

function stopTimer(){
    clearInterval(timeInterval)
}

function resetTimer(){
    clearInterval(timeInterval)
    timeLeft = 1500
    updateTime()
}

startbuttonEl.addEventListener("click", startTimer)
stopbuttonEl.addEventListener("click", stopTimer)
resetbuttonEl.addEventListener("click", resetTimer)
