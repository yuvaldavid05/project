const frame = document.querySelector('.frame');
const end = document.querySelector('.end');
const arrOperations = ['חיבור' ,'חיסור' ,'כפל' ,'חילוק'];
let i = 0;
let solution;
let result;
let right = [];



function createGame(){
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

    frame.appendChild(divNum1);
    frame.appendChild(divOp);
    frame.appendChild(divNum2); 
    frame.appendChild(Equal); 
    frame.appendChild(inputGame); 

    startGame();
}

function startGame(){
    const divNum1 = document.querySelector('.divNum1');
    const divOp = document.querySelector('.divOp');
    const divNum2 = document.querySelector('.divNum2');
    const Equal = document.querySelector('.Equal');
    const inputGame = document.querySelector('.inputGame');
    

    let number1 = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * 20) + 1;
    let rand = Math.floor(Math.random() * arrOperations.length);

    divNum1.innerHTML = number1;
    divOp.innerHTML = change(arrOperations[rand]);
    divNum2.innerHTML = number2;
    Equal.innerHTML = "=";

    solution = solve(number1 ,number2, change(arrOperations[rand]));

}

function change(place){
    if(place == 'חיבור'){
        return '+';
    }

    if (place == 'חיסור'){
        return '-';
    }

    if(place == 'כפל'){
        return '*';
    }

    if (place == 'חילוק'){
        return '/';
    }
}


function solve(num1 , num2, oper){
    if(oper == '+'){
            return num1 + num2; 
             
    }

    if(oper == '-'){
                return num1 - num2;  
    }

    if(oper == '*'){
            return num1 * num2; 
    }

    if(oper == '/'){
            return num1 / num2;
    }
}


function chack(){
    const btn = document.querySelector('.btn-chack');
    const inputGame = document.querySelector('.frame input');
    const value =  inputGame.value;
    i++;
    
    if(i <= 12 && i >= 0){

        if(value && value == solution){
            console.log('נכון');
            btn.style.backgroundColor = 'green';
            right.push(+value);
            
        }else if (value && value != solution){

            console.log('לא נכון');
        }
    }else{
        console.log('המשחק נגמר');
        i = -2;
        gameOver();
        return;
    }

    console.log(right);
    console.log(i);
    startGame();
    document.querySelector('.frame input').value = "";


    
}


function gameOver(){
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.frame').style.display = 'none';

    const divGameOver = document.createElement('div');
    divGameOver.className = 'gameOver';

    divGameOver.innerHTML = `<br> נגמר המשחק 
    תוצאות המשחק הן : <br> <br> ${right.length} תשובות נכונות`

    end.appendChild(divGameOver);
}





function answer(ev) {
    const value = ev.target.value;

    if (ev.keyCode === 13 && value) {
        if(value == solution){
            ev.target.value = "";
            startGame();
        

        } else {

        }
        
        // איפסנו את האינפוט
        ev.target.value = "";
    }
   
}