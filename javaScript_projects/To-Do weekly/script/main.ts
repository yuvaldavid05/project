const width: number = 7;
let widthRow: number = 0;
const heightRow: number = 4;
const frame = document.querySelector(".frame");
const divsArry: any[] = [];
const fullAll = false;
const divs: any[] = [];


const content = document.querySelector(".content");
const day = document.querySelector(".day");
const add = document.querySelector(".add");

const val = content?.querySelector("input")?.value;



//פונקציית יצירת הלוח השבועי(יוצרת את הדיבים מתחת לימים)
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
        div?.appendChild(p);
        frame?.appendChild(div);

        div.addEventListener("click", (ev) => {
            const val = ev.target;

            console.log(val);

            if (val !== div) {
                div.style.border = "2px dotted black";

                console.log("מצאתי");
                console.log(i);


                //פונקציית האזנה לכפתור מחיקה, קולטת את המטלה שלא ריקה 
                //שנלחצה ומוחקת את הטקסט בפנים
                const remove = document.querySelector(".remove");
                remove?.addEventListener("click", () => {
                    if (divsArry[i] !== "") {
                        divsArry[i].innerHTML = "";
                        div.style.borderTop = "none";
                        div.style.borderBottom = "none";
                        div.style.borderRight = "1px solid black";
                        div.style.borderLeft = "1px solid black";
                        div.style.background = "bisque";
                    }


                });

                //האזנה והגדרה לכפתור עריכה - דאבל קליק עריכה
                //לחיצה אחת סגירת העריכה
                const edit = document.querySelector(".edit");
                edit?.addEventListener("dblclick", () => {
                    div.contentEditable = "true";
                    div.focus();


                });
                edit?.addEventListener("click", () => {
                    div.contentEditable = "false";
                    div.style.borderTop = "none";
                    div.style.borderBottom = "none";
                    div.style.borderRight = "1px solid black";
                    div.style.borderLeft = "1px solid black";

                });
            }
        })
    }
}




// פונקציה המופעלת בכפתור ההוספה, קולטת את הערכים ושולחת אותם לפונקציה
// שמסדרת אותם לפי הימים בקפיצות של 7 
function addTask() {
    const btn = document.querySelector("add");

    const val = content?.querySelector("input");
    const chosenDay = document.querySelector("select");

    if (val?.value && chosenDay?.value) {
        sendDay(chosenDay.value, val.value);
        chosenDay.value = "";
        val.value = "";
    } else {
        alert(" אופס... לא כל השדות מלאים")
    }
}

//הפונקציה המסדרת את המשימות לפי הימים בקפיצות של אורך הטבלה (כלומר 7) 
function sendDay(dayOne: string | undefined, content: string | undefined) {

    switch (dayOne) {
        case 'יום א': widthRow = 0; break;
        case 'יום ב': widthRow = 1; break;
        case 'יום ג': widthRow = 2; break;
        case 'יום ד': widthRow = 3; break;
        case 'יום ה': widthRow = 4; break;
        case 'יום ו': widthRow = 5; break;
        case 'יום ש': widthRow = 6; break;
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

                    div?.appendChild(p);
                    frame?.appendChild(div);
                }
            }
        }
        divsArry[widthRow].innerText = content;
    }

}




