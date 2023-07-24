const width: number = 7;
let widthRow: number = 0;
const heightRow: number = 4;
const frame = document.querySelector(".frame");
const divsArry: any[] = [];
const fullAll = false;

const content = document.querySelector(".content");
const day = document.querySelector(".day");
const add = document.querySelector(".add");

const val = content?.querySelector("input")?.value;
const hey = day?.querySelector("select");


function createBoard() {
    for (let i = 0; i < width * heightRow; i++) {
        const div = document.createElement("div");
        div.className = "divs";

        const p = document.createElement("p");
        divsArry.push(p);
        div?.appendChild(p);
        frame?.appendChild(div);
    }

    
}

// function buttonWork() {
//     const btn = document.querySelector("add");
//     if (fullAll) {
//         btn.disabled = false;
//     }
// }
function addTask() {
    const btn = document.querySelector("add");

    const val = content?.querySelector("input")?.value;
    const chosenDay = document?.querySelector("select")?.value;
    const del = 'X'
    // sendDay(chosenDay, val);
    
    if(val && chosenDay){
        sendDay(chosenDay , val, del);
    } else {
        alert(" אופס... לא כל השדות מלאים")
    }

    // console.log(val, chosenDay);

    if (localStorage.toDo) {
        const toDo = JSON.parse(localStorage.toDo);
    
        toDo.forEach(() => {
            addTask();
        });
    }

}

function sendDay(dayOne : string | undefined , content: string | undefined, del : string | undefined) {
    switch (dayOne) {
        case 'יום א': widthRow = 0; break;
        case 'יום ב': widthRow = 1; break;
        case 'יום ג': widthRow = 2; break;
        case 'יום ד': widthRow = 3; break;
        case 'יום ה': widthRow = 4; break;
        case 'יום ו': widthRow = 5; break;
        case 'יום ש': widthRow = 6; break;
    }

    
    if (dayOne){
        while (divsArry[widthRow].innerText !== "") {
            widthRow += width;
            if(widthRow >= divsArry.length) {
                for (let i = 0; i < width; i++){
                    const div = document.createElement("div");
                    div.className = "divs";
            
                    const p = document.createElement("p");
                    divsArry.push(p);
            
                    div?.appendChild(p);
                    frame?.appendChild(div);
                }
            }
        } 
        divsArry[widthRow].innerText = content;
    }

    
    // if (divsArry[widthRow].innerText === "") {
        //     divsArry[widthRow].innerText = content;
        // } else {
            //     widthRow += width;
            //     if (divsArry[widthRow].innerText === "") {
                //         divsArry[widthRow].innerText = content;
                //     } else if(divsArry[widthRow].innerText !== "") {
                    //     widthRow += width;
                    //     }
                    // }
                    
                }
                
                function save() {
                        const toDo = [...document.querySelectorAll(".frame .divs")].map(el => el.innerHTML).filter(x => x);
                    
                        localStorage.toDo = JSON.stringify(toDo);
                }


// function sendDay(day: string | undefined, content: string | undefined) {

//     if (day === "יום א") {
//         if (divsArry[widthRow].innerText === "") {
//             divsArry[widthRow].innerText = content;
//         } else {
//             widthRow += width;
//             if (divsArry[widthRow].innerText === "") {
//                 divsArry[widthRow].innerText = content;
//             } else {
//                 sendDay("יום א", val);
//             }
//         }

//     }

//     if (day === "יום ב") {
//         widthRow = 0;
//         if (divsArry[widthRow + 1].innerText === "") {
//             divsArry[widthRow + 1].innerText = content;
//         } else {
//             widthRow += width;
//             if (divsArry[widthRow + 1].innerText === "") {
//                 divsArry[widthRow + 1].innerText = content;
//             } else {
//                 sendDay("יום ב", val);
//             }

//         }

//     }

//     if (day === "יום ג") {
//         widthRow = 0;
//         if (divsArry[widthRow + 2].innerText === "") {
//             divsArry[widthRow + 2].innerText = content;
//         } else {
//             widthRow += width;
//             if (divsArry[widthRow + 2].innerText === "") {
//                 divsArry[widthRow + 2].innerText = content;
//             } else {
//                 sendDay("יום ג", val);
//             }
//         }
//     }


// }

// window.addEventListener('keydown', ev => {
//     ev.preventDefault();

//     // Checks which key was pressed.
   
// });