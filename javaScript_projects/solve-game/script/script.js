const frame = document.querySelector('.frame');
const arrOperations = ['חיבור' ,'חיסור' ,'כפל' ,'חילוק'];
const i = 1;
let x;
let big = false;
let solution;
let result;
let win = [];


function createGame(){
    const div = document.querySelector('.frame div');

    const p = document.createElement('p');
    div.appendChild(p);

    startGame();

    // let number1 = Math.floor(Math.random() * 20) + 1;
    // let number2 = Math.floor(Math.random() * 20) + 1;
    // let rand = Math.floor(Math.random() * arrOperations.length);
    

    //     p.innerHTML = `${number1} ${change(arrOperations[rand])} ${number2} =  `;
    //     solution = solve(number1,number2,change(arrOperations[rand]));

        // if(number1 < number2){
        //     big = true;
        //     if(change(arrOperations[rand]) == '/'){
        //         if(number1 % number2 != 0){
        //             return;
        //         }
        //     } else {
                
        //         return p.innerHTML = `${number2} ${change(arrOperations[rand])} ${number1} =  `;
        //     }
        // }
    
        // if(change(arrOperations[rand]) == '/'){
        //     if(big && number1 % number2 != 0){
        //         p.innerHTML = `${number2} ${change(arrOperations[rand])} ${number1} =  `;
        //     } 
        
        // }
    // console.log(number1);
    // console.log(number2);
    // console.log(arrOperations[rand]);
    // console.log(change(arrOperations[rand]));

}




function startGame(){
    const p = document.querySelector('p');


    let number1 = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * 20) + 1;
    let rand = Math.floor(Math.random() * arrOperations.length);
    
    if(arrOperations[rand] == 'חילוק'){
        if(number2 < number1 || number1 % number2 != 0){
            startGame();
        }
    }
    
    console.log(number1);
    console.log(number2);
    console.log(arrOperations[rand]);
    console.log(change(arrOperations[rand]));

        p.innerHTML = `${number1} ${change(arrOperations[rand])} ${number2} =  `;
        solution = solve(number1,number2,change(arrOperations[rand]));

    

}

    function change(place){
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


    function answer(ev) {
        const value = ev.target.value;

        if (ev.keyCode === 13 && value) {
            if(value == solution){
                console.log('נכון');
                console.log(solution);
                win.push(+value);
                console.log(win);

            } else {
                console.log('לא נכון');
            }
            
            // איפסנו את האינפוט
            ev.target.value = "";
        }
       
    }
        



    // input.addEventListener('change', ev =>{
    //     answer(ev.value);
    // });


    // switch (arrOperations[rand]) {
    //     case 'חיבור': x = '+'; break;
    //     case 'חיסור': x = '-'; break;
    //     case 'כפל': x = '*'; break;
    //     case 'חילוק': x = '/'; break;
    // };

 

// function play(){
//     setInterval(createGame() ,
//     1000);
// }




