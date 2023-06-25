const board = document.querySelector('.board');
let counter = 0;
let winner;
let isGameOver = false;
let divAll = [];

//יצירת הלוח
function createBoard(){
    for(i = 1; i <= 9; i++){
        const div = document.createElement('div');
        divAll.push(div);
        
        //יצירת שלבי המשחק כאשר כל תור זוגי הוא של שחקן O
        div.addEventListener('click', ev =>{
            // במידה וכבר נגמר המשחק אז לבטל את הכניסה להאזנה 
            if (isGameOver) {
                return;
            }

           const clickDiv = ev.target;
            if(!clickDiv.innerHTML && counter % 2 == 0){
                div.innerHTML = 'x';
                counter++;
                
            } else if( !clickDiv.innerHTML) {
                div.innerHTML = 'o';
                counter++;
            }
            // שליחה לפונקציה שתבדוק אם יש מנצח בכל קליק, מילוי קובייה
            check();

            //במידה ויש מנצח ו.או כל המשבצות מלאות - הכרזה על סוף המשחק ואיפוס הצובר
            if (winner || divAll.every(val => val.innerHTML)){
                counter = 0;
                isGameOver = true;
                gameOver();
            }
        });

        board.appendChild(div);
    }
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
            winner = 'x';
            break;

        } else if (res.every(val => val == 'o')) {
            winner = 'o';
            break;
        }
        
    }
};

//פונקציה המכריזה על סןף המשחק - או שיש מנצח או שכל המשבצות מלאות 
function gameOver(){
    if(winner){
        const winner = document.createElement("div");
        winner.classList.add("winner");
        winner.innerHTML = `ניצח`;

        document.body.appendChild(winner);

    } else {
        const nobody = document.createElement("div");
        nobody.classList.add("nobody");
        nobody.innerHTML = 'אין מנצח';

        document.body.appendChild(nobody);
    }

    //התחלה מחדש של המשחק - תוך טעינת מסך
    setTimeout(() => {
        location.reload();
    }, 7 * 1000);

}
