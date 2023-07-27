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
        // const randomNum = Math.floor(Math.random() * xArry.length);
        const div = document.createElement('div');
        board.appendChild(div);
        divs.push(div);


        if (x <= length / 2) {
            xArry.push(x);
            x++;
        } else {
            x = 1;
            xArry.push(x);
            x++;
        }


        const span = document.createElement('span');
        span.innerHTML = xArry[i];
        div.appendChild(span);
        // span.innerHTML = xArry[randomNum];

        // if (i % 2 == 0) {
        //     span.innerHTML = i + 1;
        //     div.appendChild(span);
        // } else if (i % 2 == 1) {
        //     span.innerHTML = i + 1;
        //     div.appendChild(span);
        // }



        // if (x < length / 2) {
        //     span.innerHTML = x + 1;
        // } else {
        //     x = 1;
        //     span.innerHTML = x;
        // }

        // xArry.splice(randomNum, 1);


        // div.appendChild(span);

        // אירוע המופעל בלחיצה על העכבר
        div.addEventListener("click", ev => {
            if (isGameOver) {
                return;
            }

            ev.target.classList.add('showing');
        });

    }

    rand();
    // div.appendChild(span);
    // random(divs);
}



function rand() {


    const arr = [];
    const len = xArry.length;

    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * xArry.length);

        arr.push(xArry[rand]);
        xArry.splice(rand, 1);
    }

    xArry = arr;
}

function random(arry) {
    // for (let i = 0; i <= arry.length; i++) { }
    // const random = Math.floor(Math.random() * divs.length);
    // const span = document.createElement('span');

    let i = 0;
    while (i <= arry.length) {
        let randomDiv = Math.floor(Math.random() * divs.length);
        let randomNum = Math.floor(Math.random() * xArry.length);

        if (divs[randomDiv] != null) {
            const div = document.querySelector(".board div:nth-child(2)");

            const span = document.createElement('span');
            span.innerHTML = xArry[randomNum];
            xArry.splice(randomNum, 1);

            divs[randomDiv] = null;
            div.appendChild(span);
        }


    }


    // divs[random].span.innerHTML = x;
    // divs.splice(i, 1);
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