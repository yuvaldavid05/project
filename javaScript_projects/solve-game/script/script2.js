const frame = document.querySelector('.frame');
const game = document.querySelector('.game');
const end = document.querySelector('.end');
const arrOperations = ['חיבור', 'חיסור', 'כפל', 'חילוק'];
let i = 0;
let solution;
let right = [];


//פונקציה היוצרת את התבנית של המשחק (סימן שווה, מספרים וכו)
function createGame() {
    const divNum1 = document.createElement('div');
    divNum1.className = 'divNum1';

    const divOp = document.createElement('div');
    divOp.className = 'divOp';

    const divNum2 = document.createElement('div');
    divNum2.className = 'divNum2';

    const Equal = document.createElement('div');
    Equal.className = 'Equal';

    const inputGame = document.createElement('input');
    inputGame.className = 'inputGame';

    game.appendChild(divNum1);
    game.appendChild(divOp);
    game.appendChild(divNum2);
    game.appendChild(Equal);
    game.appendChild(inputGame);
    startGame();
}

//פונקציה שמגרילה רנדומלית את המספרים שיהיו בתרגיל החשבוני ואת פעולת החשבון
function startGame() {
    const divNum1 = document.querySelector('.divNum1');
    const divOp = document.querySelector('.divOp');
    const divNum2 = document.querySelector('.divNum2');
    const Equal = document.querySelector('.Equal');
    const inputGame = document.querySelector('.inputGame');


    let number1 = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * 20) + 1;
    let rand = Math.floor(Math.random() * arrOperations.length);

    // מונעת תרגיל שתוצאתו שלילית (המספר הראשון גדול מהשני)
    if (number1 < number2) {
        const temp = number1;
        number1 = number2;
        number2 = temp;
    }

    //מונעת תשובה של מספר עשרוני\שבר ע"י בדיקה שאין שארית בחלוקה
    //ואם כן הגרלה מחדש
    if (arrOperations[rand] == 'חילוק') {
        if (number1 % number2 != 0) {
            startGame();
            return;
        }
    }

    divNum1.innerHTML = number1;
    divOp.innerHTML = change(arrOperations[rand]);
    divNum2.innerHTML = number2;
    Equal.innerHTML = "=";

    solution = solve(number1, number2, change(arrOperations[rand]));

}

//פונקציה הממירה את התאים במערך לפעולה העשרונית
function change(place) {
    if (place == 'חיבור') {
        return '+';
    }

    if (place == 'חיסור') {
        return '-';
    }

    if (place == 'כפל') {
        return '*';
    }

    if (place == 'חילוק') {
        return '/';
    }
}

//פונקציה שמקבלת את הערכים ,פותרת אותם ומחזירה את התוצאה
function solve(num1, num2, oper) {
    if (oper == '+') {
        return num1 + num2;

    }

    if (oper == '-') {
        return num1 - num2;
    }

    if (oper == '*') {
        return num1 * num2;
    }

    if (oper == '/') {
        return num1 / num2;
    }
}


//פונקציה הבודקת אם המספר שקיבלנו ע"י המשתמש שווה לתוצאת התרגיל
function chack() {
    const btn = document.querySelector('.btn-chack');
    const inputGame = document.querySelector('.frame input');
    const value = inputGame.value;
    i++;

    if (i <= 12 && i >= 0) {

        if (value && value == solution) {
            console.log('נכון');
            right.push(+value);

        } else if (value && value != solution) {
            console.log('לא נכון');
        }
    } else {
        console.log('המשחק נגמר');
        i = -2;
        gameOver();
        return;
    }

    console.log(right);
    console.log(i);
    startGame();
    document.querySelector('.game input').value = "";

}


//סיום המשחק לאחר 12 תרגילים והצגת מספר התשובות הנכונות 
function gameOver() {
    document.querySelector('.frame').style.display = 'none';

    const divGameOver = document.createElement('div');
    divGameOver.className = 'gameOver';

    divGameOver.innerHTML = `<br> נגמר המשחק 
    תוצאות המשחק הן : <br> <br> ${right.length} : תשובות נכונות`

    end.appendChild(divGameOver);

    const btnStartNewGame = document.createElement("button");
    btnStartNewGame.className = "btnStartNewGame";
    btnStartNewGame.innerHTML = "למשחק חדש";
    end.appendChild(btnStartNewGame);

    btnStartNewGame.addEventListener('click', () => {
        location.reload();
    });

}
