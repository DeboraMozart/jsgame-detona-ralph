const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },

    value: {
        timerId: null
    }
};

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function moveEnemy(){
    state.value.timerId = setInterval(randomSquare, 1000);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {});
}

function initialize(){
    moveEnemy();
}

initialize();
