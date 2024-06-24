const timeEl= document.querySelector(".time");
const startbuttonEl = document.querySelector(".start-btn");
const stopbuttonEl = document.querySelector(".stop-btn");
const resetbuttonEl = document.querySelector(".reset-btn");

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    startTime = Date.now() - elapsedTime
    timeInterval = setInterval(()=>{
        elapsedTime= Date.now() - startTime;
        timeEl.textContent = formatTime(elapsedTime) ;
    }, 10)
    startbuttonEl.disabled = true //diable start and enable stop when you click start
    stopbuttonEl.disabled = false
}
function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000*60))/ 1000);
    const minutes = Math.floor((elapsedTime % (1000*60*60))/ (1000*60));
    const hours = Math.floor( elapsedTime / (1000*60*60) );

    return (
        
        
        (hours? (hours>9? hours : "0" + hours) : "00")  + ":" +
        (minutes? (minutes>9? minutes : "0" + minutes) : "00") + ":" + 
        (seconds? (seconds>9?  seconds : "0" + seconds) : "00") + ":" +
        (milliseconds >9? milliseconds : "0" + milliseconds) );
}

function stopTimer(){
    clearInterval(timeInterval)
    startbuttonEl.disabled = false
    stopbuttonEl.disabled = true


}

function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    timeEl.textContent = "00:00:00";
    startbuttonEl.disabled = false;
    stopbuttonEl.disabled = true;

}

startbuttonEl.addEventListener("click", startTimer)
stopbuttonEl.addEventListener("click", stopTimer)
resetbuttonEl.addEventListener("click", resetTimer)


