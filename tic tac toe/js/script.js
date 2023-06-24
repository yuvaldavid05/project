const board = document.querySelector('.board');
let counter = 0;
let winner;

//יצירת הלוח
function createBoard(){
    for(i = 1; i <= 9; i++){
        const div = document.createElement('div');
        
        div.addEventListener('click', ev =>{
            clickDiv = ev.target;
            if(!clickDiv.innerHTML && counter % 2 == 0){
                div.innerHTML = 'x';
                counter++;
            }else {
                div.innerHTML = 'o';
                counter++;
            }
            check();
            //לא לשכוח לאפס את הקאונטר
        })
        board.appendChild(div);
        
    }
};


function check() {
    const divs = board.querySelectorAll('div');

    const options = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const arr of options){
        const res = arr.every(index => divs[index].innerHTML == 'x' | 'o');

        console.log(res);

        // if(res && == 'x'){
        //     winner = x;
        //     console.log(winner);
        // } else if(res && divs[index].innerHTML == 'o'){
        //     winner = o;
        //     console.log(winner);

        // } else {
        //     conter = 0;
            
        // }

        
    }
};

