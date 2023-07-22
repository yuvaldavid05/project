const width = 4;
const height = 4;
const length = width * height;
const divs = [];
let isGameOver = false;
let x = 1;
const xArry = [];

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
        divs.push(div);

        // xArry.push(x);



        const span = document.createElement('span');

        // span.innerHTML = xArry[random];
        // xArry.slice(xArry[random])

        if (x <= length / 2) {
            // divs[random].innerHTML = x;
            div.innerHTML = x;
            xArry.push(x);
            x++;
        } else {
            x = 1;
            div.innerHTML = x;
            xArry.push(x);
            x++;
        }
        div.appendChild(span);





        // אירוע המופעל בלחיצה על העכבר
        div.addEventListener("click", ev => {
            if (isGameOver) {
                return;
            }

            ev.target.classList.add('showing');
        });
    }
}

function random(arry) {
    const arry2 = [];

    for (let i = 0; i <= arry.length; i++) {
        const random = Math.floor(Math.random() * arry.length);
        if (arry2[random] == null) {
            arry2[random] == arry[i];
            arry.splice(i);
        }
    }

    return arry2;
}

function gameOver() {
    board.classList.add('game-over');

    confetti({
        particleCount: 100,
        spread: 70,
        decay: 0.9,
        origin: { y: 0.6 }
    });

    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerHTML = "ניצחת";

    document.body.appendChild(winner);

    setTimeout(() => {
        location.reload();
    }, 5 * 1000);
}