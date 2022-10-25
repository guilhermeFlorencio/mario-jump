const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const board = document.querySelector('.game-board');
const over = document.querySelector('.over');

const jump = () => {
    mario.classList.add('jump');    
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

console.log(placar)
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/mario-game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        over.style.visibility = 'visible';
        over.style.backgroundColor = '#FF0000';

        clearInterval(loop);
        setPlacar(0);
    }

}, 10);

document.addEventListener('keydown', jump);

