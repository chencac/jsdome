// 程式碼寫這裡
const time =document.querySelector(".timer")
let defaultSeconds = 100
let totalSeconds = 0
let running = false
let paused = false
let timeID

function updateTimer(seconds){
    let mins = String(Math.floor(seconds / 60)).padStart(2,"0")
    let secs = String(seconds % 60).padStart(2,"0")

    time.textContent =`${mins}:${secs}`;

    if(seconds === 0){
        time.classList.add("time-up")
    }else{
        time.classList.remove("time-up")
    }
}
function timesup(){
    updateTimer(0)
    clearInterval(timeID)
    running = false
    playSound()

}
function playSound(){
    const sound = new Audio("sounds/news.mp3")
    sound.play()
}

function initTimer(){
    running = true
    totalSeconds = defaultSeconds
    updateTimer(totalSeconds)

    setupTimer()
}

function setupTimer(){
    timeID = setInterval(() => {
        if(totalSeconds > 1){
            totalSeconds --
            updateTimer(totalSeconds);
        }else{
            timesup()
        }
    }, 1000)

}

function pauseTimer() {
    paused =true
    clearInterval(timeID)
}

function resumeTimer(){
    paused = false
    setupTimer()
}

document.addEventListener("keyup",(e)=>{
    
    switch(e.key){
        case "Enter":
            if(!running){
                initTimer()
            }    
            break

            case " ":
                if(running){
                    if(paused){
                        resumeTimer()
                    }else{
                        pauseTimer()
                    }
                }
                break
    }

})