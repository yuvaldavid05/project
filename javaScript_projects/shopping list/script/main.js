"use strict";
var _a;
const width = 7;
let widthRow = 0;
const heightRow = 4;
const frame = document.querySelector(".frame");
const divsArry = [];
const fullAll = false;
const divs = [];
const content = document.querySelector(".content");
const day = document.querySelector(".day");
const add = document.querySelector(".add");
const val = (_a = content === null || content === void 0 ? void 0 : content.querySelector("input")) === null || _a === void 0 ? void 0 : _a.value;
// if (localStorage.toDo) {
//     const toDo = JSON.parse(localStorage.toDo);
//     toDo.forEach(() => {
//         showTasks()
//     });
// }
// function showTasks(){
//     const allIn = [...document.querySelectorAll(".frame .divs p")];
//     if(allIn.map(el => el.innerHTML !=="").filter(x => x)){
//         console.log(allIn);
//     }
// }
// if (localStorage.frame) {
//     console.log("יש מידע");
//     frame?.innerHTML = localStorage.frame;
// }
function createBoard() {
    for (let i = 0; i < width * heightRow; i++) {
        const div = document.createElement("div");
        div.className = "divs";
        div.contentEditable = "false";
        divs.push(div);
        const button = document.createElement("button");
        button.style.display = "none";
        const p = document.createElement("p");
        divsArry.push(p);
        div === null || div === void 0 ? void 0 : div.appendChild(p);
        frame === null || frame === void 0 ? void 0 : frame.appendChild(div);
        div.addEventListener("click", (ev) => {
            const val = ev.target;
            console.log(val);
            if (val !== div) {
                div.style.border = "2px dotted black";
                console.log("מצאתי");
                console.log(i);
                const remove = document.querySelector(".remove");
                remove === null || remove === void 0 ? void 0 : remove.addEventListener("click", () => {
                    if (divsArry[i] !== "") {
                        // if (confirm("האם אתה בטוח שאתה רוצה למחוק מטלה זו?")) {
                        divsArry[i].innerHTML = "";
                        div.style.borderTop = "none";
                        div.style.borderBottom = "none";
                        div.style.borderRight = "1px solid black";
                        div.style.borderLeft = "1px solid black";
                        div.style.background = "bisque";
                    }
                    // }
                });
                const edit = document.querySelector(".edit");
                edit === null || edit === void 0 ? void 0 : edit.addEventListener("dblclick", () => {
                    div.contentEditable = "true";
                    div.focus();
                });
                edit === null || edit === void 0 ? void 0 : edit.addEventListener("click", () => {
                    div.contentEditable = "false";
                    div.style.borderTop = "none";
                    div.style.borderBottom = "none";
                    div.style.borderRight = "1px solid black";
                    div.style.borderLeft = "1px solid black";
                });
                // const done = document.querySelector(".done");
                // done?.addEventListener("click", () => {
                //     div.style.backgroundColor = "rgba(72, 241, 184, 0.674)";
                //     div.style.borderTop = "none";
                //     div.style.borderBottom = "none";
                //     div.style.borderRight = "1px solid black";
                //     div.style.borderLeft = "1px solid black";
                //     return;
                // });
                // btnRemove?.addEventListener("click", () => removeTask(i));
            }
        });
    }
    // removeTask();
}
// function removeTask(i: number) {
//     const divElem = divsArry[i].closet("div");
//     console.log(divElem);
//     const remove = document.querySelector(".remove");
//     remove?.addEventListener("click", () => {
//         if (divsArry[i] !== "") {
//             // removeTask(i);
//             if (confirm("האם אתה בטוח שאתה רוצה למחוק מטלה זו?")) {
//                 divsArry[i].innerHTML = "";
//                 divElem.style.borderTop = "none";
//                 divElem.style.borderBottom = "none";
//                 divElem.style.borderRight = "1px solid black";
//                 divElem.style.borderLeft = "1px solid black";
//                 divElem.style.background = "bisque";
//             }
//         }
//     });
// }
function removeTask2() {
    const obj = {
        elem: "",
        text: ""
    };
    div === null || div === void 0 ? void 0 : div.addEventListener("click", () => {
        console.log("היי");
    });
}
function addTask() {
    const btn = document.querySelector("add");
    const val = content === null || content === void 0 ? void 0 : content.querySelector("input");
    const chosenDay = document.querySelector("select");
    if ((val === null || val === void 0 ? void 0 : val.value) && (chosenDay === null || chosenDay === void 0 ? void 0 : chosenDay.value)) {
        sendDay(chosenDay.value, val.value);
        chosenDay.value = "";
        val.value = "";
    }
    else {
        alert(" אופס... לא כל השדות מלאים");
    }
}
function edit(divIndex) {
    const div = document.querySelector("divs");
}
function sendDay(dayOne, content) {
    switch (dayOne) {
        case 'יום א':
            widthRow = 0;
            break;
        case 'יום ב':
            widthRow = 1;
            break;
        case 'יום ג':
            widthRow = 2;
            break;
        case 'יום ד':
            widthRow = 3;
            break;
        case 'יום ה':
            widthRow = 4;
            break;
        case 'יום ו':
            widthRow = 5;
            break;
        case 'יום ש':
            widthRow = 6;
            break;
    }
    if (dayOne) {
        while (divsArry[widthRow].innerText !== "") {
            widthRow += width;
            if (widthRow >= divsArry.length) {
                for (let i = 0; i < width; i++) {
                    const div = document.createElement("div");
                    div.className = "divs";
                    const p = document.createElement("p");
                    divsArry.push(p);
                    div === null || div === void 0 ? void 0 : div.appendChild(p);
                    frame === null || frame === void 0 ? void 0 : frame.appendChild(div);
                }
            }
        }
        divsArry[widthRow].innerText = content;
    }
}
// function save() {
//     localStorage.frame = frame?.innerHTML;
// }
