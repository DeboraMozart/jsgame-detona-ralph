const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },

    value: {
        hitPosition: 0,
        result: 0,
        currentTime: 60
    },

    actions:{
        countDownTimerId: setInterval(countDown, 1000),
        timerId: setInterval(randomSquare, 1000)
    }
};

function countDown(){
    state.value.currentTime--;
    state.view.timeleft.textContent = state.value.currentTime;
    if(state.value.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! O seu resultado foi: " + state.value.result);
    }
}

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.1
    audio.play()
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.value.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.value.hitPosition){
                playSound("hit");
                state.value.result++;
                state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
            }
        })
    })
};

function initialize(){
    addListenerHitBox();
}

initialize();
