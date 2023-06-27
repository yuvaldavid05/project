const board = document.querySelector('.board');
const frame = document.querySelector('.frame');
let counter = 0;
let winnerIs;
let isGameover = false;
let divAll = [];
let timerInterval;
let timer = 0;
let namePlayer1 = "שחקן 1";
let namePlayer2 = "שחקן 2";

function logInPLayers(){

    const player1 = document.querySelector('.frame input#first');
    const player2 = document.querySelector('.frame input#second');

    if(player1.value || player2.value){
        namePlayer1 = player1.value || namePlayer1;
        namePlayer2 = player2.value || namePlayer2;
    }

    document.querySelector('#player1').innerHTML = namePlayer1;
    console.log(namePlayer1);
    document.querySelector('#player2').innerHTML = namePlayer2;
    console.log(namePlayer2);


    document.querySelector('#first').value = '';
    document.querySelector('#second').value = '';
}



//יצירת הלוח
function createBoard(){
    document.querySelector('.frame section').style.display = 'none';

    for(i = 1; i <= 9; i++){
        const div = document.createElement('div');
       div.style.color =` hsl(${i * 30}  50%  52%)` ;
        divAll.push(div);

        board.appendChild(div);

       
        
        
        const x = document.querySelector('section #player1');
        const o = document.querySelector('section #player2');
        if(x.innerHTML == '' && o.innerHTML == ''){
            namePlayer1 = 'x';
            namePlayer2 = 'o';
        } 

        //יצירת שלבי המשחק כאשר כל תור זוגי הוא של שחקן o
        div.addEventListener('click', ev => {
            // במידה וכבר נגמר המשחק אז לבטל את הכניסה להאזנה 
            clearInterval();
            if (isGameover) {
                return;
            }

           const clickDiv = ev.target;
            if(!clickDiv.innerHTML && counter % 2 == 0){
                clearInterval(timerInterval);
                timerOn();
                timer = 0;
                div.innerHTML = 'x';
                counter++;
                
            } else if( !clickDiv.innerHTML) {
                clearInterval(timerInterval);
                timerOn();
                timer = 0;
                div.innerHTML = 'o';
                counter++;
            }
            // שליחה לפונקציה שתבדוק אם יש מנצח בכל קליק, מילוי קובייה
            check();
            



            //במידה ויש מנצח ו.או כל המשבצות מלאות - הכרזה על סוף המשחק ואיפוס הצובר
            if (winnerIs || divAll.every(val => val.innerHTML)){
                counter = 0;
                isGameover = true;
                gameover();
            }
        });
    }

        const button1 = document.createElement('button');
        const button2 = document.createElement('button');

        button1.className = 'button1';
        button2.className = 'button2';

        button1.innerHTML = 'הוראות משחק';
        button2.innerHTML = 'איפוס משחק';

        frame.appendChild(button1);
        frame.appendChild(button2);

        button1.addEventListener('click' , () =>{
            document.querySelector('.three.show').style.display = 'block';
        });

        button2.addEventListener('click' , () => {
            // const div = document.querySelectorAll('.board div');
            divAll.every(val => val.innerHTML == '');
            // clearInterval(timerInterval);
            timer = 0;
            timerOn();
            clearInterval(timerInterval);

           
        });
        
    // const buttonInstructions = document.createElement('button');
    // buttonInstructions.className = 'buttonInstructions';
    // board.appendChild(buttonInstructions);

};

        

        function timerOn(){
            timerInterval = setInterval(() => {
                const date = new Date(timer * 1000);
                const s = date.getSeconds();
                const m = date.getMinutes();
                document.querySelector(".timer").innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
                timer++;
                // while (s >= 2){
                //     let timerOnTime = document.querySelector(".timer");
                //     timerOnTime.style.color = "red";

                // }
    
                if(isGameover){
                    clearInterval(timerInterval);
                }
        }, 1000);
        };
   



//פונקציה הבודקת אם יש מנצח דרך מערך שבנוי ממערכים המכיל אינדקסים שבהם יש מנצח
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

    //בדיקה של כל מערך בתוך המערך הגדול
    for (const arr of options){
        const res = arr.map(index => divs[index].innerHTML);

        //בדיקה אם כל הערכים במערך הפנימי שווים - כלומר יש מנצח
        if(res.every(val => val == 'x')){
            winnerIs = 'x';
            winnerArray = arr;
            break;

        } else if (res.every(val => val == 'o')) {
            winnerIs = 'o';
            winnerArray = arr;
            break;
        }
    }
};

//פונקציה המכריזה על סןף המשחק - או שיש מנצח או שכל המשבצות מלאות 
// function gameover(){
//     if(winnerIs == 'x'){
//         showWinner(`המנצח הוא ${namePlayer1}`);

//     } else if (winnerIs =='o'){
//         showWinner(`המנצח הוא ${namePlayer2}`);

//     } else{
//         showWinner("אין מנצחים המשחק נגמר");

//     }};
    

//     function showWinner(text) {
//         const winner = document.createElement("div");
//         winner.classList.add("winner");
//         winner.innerHTML = text;
    
//         board.appendChild(winner);
//     }
    
    function gameover(){
        if(winnerIs){
            const winner = document.createElement("div");
            winner.classList.add("winner");

            if(winnerIs == 'x'){
                
                winner.innerHTML = `המנצח <br> הוא <br> ${namePlayer1}`;
    
            }else {
                winner.innerHTML = `המנצח <br> הוא <br> ${namePlayer2}`;
            }
            document.body.appendChild(winner);

        } else{
            const nobody = document.createElement("div");
            nobody.classList.add("winner");
            nobody.innerHTML = ' המשחק נגמר, אין מנצח';
            document.body.appendChild(nobody);
        }
        };

    // התחלה מחדש של המשחק - תוך טעינת מסך
    function stop(){
        // setTimeout(() => {
        //     location.reload();
        // }, 7 * 1000);
        
        // clearInterval(timerInterval);

    }


