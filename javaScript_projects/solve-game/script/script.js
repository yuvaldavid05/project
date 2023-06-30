const frame = document.querySelector('.frame');
const arrOperations = ['חיבור' ,'חיסור' ,'כפל' ,'חילוק'];
const i = 1;
let x;
const inputPlay = document.createElement('input');
function createGame(){

    // const num1 = document.createElement('div');
    // const num2 = document.createElement('div');
    // const operations = document.createElement('div');
    // const res = document.createElement('input');

    // num1.className = 'num1';
    // num2.className = 'num2';
    // operations.className = 'operations';
    // res.className ='res';


    // frame.appendChild(num1);
    // frame.appendChild(num2);
    // frame.appendChild(operations);
    // frame.appendChild(res);

    // num1.innerHTML = Math.random * 10 ;

    const div = document.createElement('div');
    div.className = 'div';
    frame.appendChild(div);

    const p = document.createElement('p');
    div.appendChild(p);
    // div.appendChild(inputPlay);

    const number1 = Math.floor(Math.random() * 20) + 1;
    const number2 = Math.floor(Math.random() * 20) + 1;
    const rand = Math.floor(Math.random() * arrOperations.length);

    // p.innerHTML = `${number1} ${change(arrOperations[rand])} ${number2} = ${inputPlay} `;
    
        p.innerHTML = `${number1} ${change(arrOperations[rand])} ${number2} =  `;

        if(number1 < number2){
        return p.innerHTML = `${number2} ${change(arrOperations[rand])} ${number1} =  `;
        }
    
        if(number1 % number2 != 0){
            
 
        }


    


    console.log(number1);
    console.log(number2);
    console.log(arrOperations[rand]);
    console.log(change(arrOperations[rand]));

    function change(place){
        // place = arrOperations[rand];
        if(place == 'חיבור'){
            return x = '+';
        }

        if (place == 'חיסור'){
            return x = '-';
        }

        if(place == 'כפל'){
            return x = '*';
        }

        if (place == 'חילוק'){
            return x = '/';
        }

    }


        
    // switch (arrOperations[rand]) {
    //     case 'חיבור': x = '+'; break;
    //     case 'חיסור': x = '-'; break;
    //     case 'כפל': x = '*'; break;
    //     case 'חילוק': x = '/'; break;
    // };

 






}