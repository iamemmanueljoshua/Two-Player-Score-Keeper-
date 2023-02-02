const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let isGameOver = false;
let winningScore = 3;

const updateScores = (player, opponent) => {
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

const reset = () => {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-danger', 'has-text-success');
        p.button.disabled = false;

    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1,p2);
});


p2.button.addEventListener('click', () => {
    updateScores(p2,p1);
});

winningScoreSelect.addEventListener('change', () =>{
    winningScore = parseInt(winningScoreSelect.value);
    reset();
});

resetButton.addEventListener('click', reset);




