let nameCategory = null;
const frame = document.querySelector(".frame");
const wordFrame = document.querySelector(".wordFrame");
const keyboardFrame = document.querySelector(".keyboardFrame");
const attempts = document.querySelector(".attempts");
let btnHint = document.querySelector(".hint");

const arrayAB = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', 'ך', 'ם', 'ן', 'ף', 'ץ'];
let divs = [];
const divsAttemptsArray = [];
let arrPlaceLetters = [];
let y = 0;
let letterABclicked = null;

const category = {
    cities: ["חיפה", "נס-ציונה", "אילת", "תל-אביב", "עכו", "נתניה", "ירושלים", "פתח-תקווה", "ראשון-לציון", "הרצליה"],
    movies: ["טיטאניק", "ברבי", "משימה-בלתי-אפשרית"],
    animals: ["חתול", "תנין", "עכבר", "פיל"],
};



const keys = Object.keys(category);
console.log(keys);

function game() {
    const random = Math.floor(Math.random() * keys.length);

    //המפתח הרנדומלי שיצא
    const categoryPicked = keys[random];

    switch (categoryPicked) {
        case 'cities': nameCategory = "ערים בישראל"; break;
        case 'movies': nameCategory = "סרטים"; break;
        case 'animals': nameCategory = "בעלי חיים"; break;
    }

    const h2 = document.querySelector("h2");
    h2.innerHTML = `קטגוריה : ${nameCategory}`


    //מערך של המפתח הרנדומלי שיצא
    const c = category[categoryPicked];
    const randomWord = Math.floor(Math.random() * c.length);
    const wordRandom = c[randomWord];

    //יצירה של המסגרות של האותיות של המילה הנסתרת 
    // ומילה אפשר לרוץ עליה כמו מערך
    for (let i = 0; i < c[randomWord].length; i++) {
        const divGuessLetter = document.createElement("div");
        divGuessLetter.className = "divGuessLetter";
        divGuessLetter.style.borderBottom = "1px solid black";
        if (wordRandom[i] == "-") {
            divGuessLetter.innerHTML = "-";
            divGuessLetter.style.borderBottom = "none";
        }
        divs.push(divGuessLetter);
        console.log(wordRandom[i])

        wordFrame.appendChild(divGuessLetter);


    }
    btnHint.addEventListener("click", () => {
        const y = divs.findIndex(el => el.innerHTML == "");
        divs[y].innerHTML = wordRandom[y];
        btnHint.disabled = true;
        btnHint.style.filter = "none";
        console.log(divs[y].innerHTML);
        console.log(wordRandom[y]);
    })



    const attempts = document.querySelector(".attempts");
    for (let i = 0; i < 6; i++) {
        const divsAttempts = document.createElement("div");
        divsAttempts.className = "divsAttempts";
        divsAttemptsArray.push(divsAttempts);
        attempts.appendChild(divsAttempts);
    }

    // window.addEventListener('keydown', ev => {
    //     ev.preventDefault();
    //     console.log(ev.key);

    //     // // Checks which key was pressed.
    //     switch (ev.key) {
    //         case 'a': letterABclicked = "ש"; break;
    //         case 'b': move('right'); break;
    //         case 'c': move('down'); break;
    //         case 'd': move('left'); break;
    //         case 'e': clearInterval(interval); break;
    //     }


    // });

    //יצירה של המקלדת
    for (let i = 0; i < arrayAB.length; i++) {
        const letterAB = document.createElement("div");
        letterAB.className = "letterAB";
        letterAB.innerHTML = arrayAB[i];
        keyboardFrame.appendChild(letterAB);


        letterAB.addEventListener("click", (ev) => {


            // divsAttemptsArray[0].style.backgroundColor = "red";
            // divsAttemptsArray.splice(0, 1);
            // if (divsAttemptsArray.length == 2) {
            //     const span = document.createElement("span");
            //     span.innerHTML = "נשארו עוד 2 ניסיונות";
            //     attempts.appendChild(span);
            // }

            letterABclicked = ev.target.innerHTML;
            console.log(letterABclicked);


            if (chackLetterPlace(letterABclicked, wordRandom)) {

                if (arrPlaceLetters.length != 1) {
                    for (a of arrPlaceLetters) {
                        divs[a].innerHTML = letterABclicked;
                        letterAB.style.backgroundColor = "green";
                        letterAB.style.scale = "none";
                        if (allFull()) {
                            winner();
                            return;
                        }

                    }
                    arrPlaceLetters = [];
                } else if (arrPlaceLetters.length == 1) {
                    divs[arrPlaceLetters[0]].innerHTML = letterABclicked;
                    arrPlaceLetters = [];
                    letterAB.style.backgroundColor = "green";
                    letterAB.style.scale = "none";
                    if (allFull()) {
                        winner();
                        return;
                    }

                }


            } else {
                console.log("לא חלק מהמשפט");
                divsAttemptsArray[0].style.backgroundColor = "red";
                divsAttemptsArray.splice(0, 1);
                letterAB.style.backgroundColor = "red";
                letterAB.style.scale = "none";
                arrayAB[i] = null;
                if (divsAttemptsArray.length == 2) {
                    const span = document.createElement("span");
                    span.innerHTML = "נשארו עוד 2 ניסיונות";
                    attempts.appendChild(span);

                } else if (divsAttemptsArray.length == 0) {
                    const divLost = document.createElement("div");
                    divLost.className = "divLost";
                    frame.appendChild(divLost);

                    const divLostInside = document.createElement("div");
                    divLostInside.className = "divLostInside";
                    divLostInside.innerHTML = `לא הצלחת לנחש את המילה והפסדת :( 
                            <br>
                            המילה הייתה :<b> ${wordRandom} <b>
                            <button class="startOver" onclick="newGame()">  << לחץ כאן למשחק חוזר</button>`
                    divLost.appendChild(divLostInside);
                    console.log("lost");
                }



                // let x = 0;
                // for (l of wordRandom) {
                //     if (l == letterABclicked) {
                //         const placeLetter = x;
                //         divs[placeLetter].innerHTML = letterABclicked;
                //         if (moreThenOneLetter(wordRandom) == true) {
                //             x++;
                //         }

                //         console.log(x);
                //         console.log("מצאתי");
                //         console.log(l);
                //         console.log(letterABclicked);
                //     } else {
                //         x++;
                //     }
                //     // worng();
                // }
            }

        });



        // if (x()) {
        //     let y = divs.findIndex(el => el.innerHTML == "");
        //     divs[y] == wordRandom[y];
        //     console.log(y);
        // }

    }




    console.log(divs);
    console.log(categoryPicked);
    console.log(c[randomWord]);
    console.log(nameCategory);



}
// game();

function allFull() {
    if (divs.every(el => el.innerHTML != "")) {
        return true;
    } else {
        return false;
    }
}

function chackLetterPlace(letter, word) {
    let x = false;

    for (let i = 0; i < word.length; i++) {
        if (letter == word[i]) {
            console.log(i);
            arrPlaceLetters.push(i);
            x = true;
        }

    }
    console.log(arrPlaceLetters);
    console.log(`x = ${x}`);

    return x;
}

function x() {
    const btnHint = document.querySelector(".hint");

    btnHint.addEventListener("click", () => {
        console.log("t");
        return true;
    });

    return false;

}

function winner() {
    confetti({
        particleCount: 100,
        spread: 70,
        decay: 0.9,
        origin: { y: 0.6 }
    });

    const right = document.createElement("div");
    right.classList.add("right");
    right.innerHTML = `
    כל הכבוד! 
        <br>
    מצאת את המילה הנכונה 
        <br>
    עם ${6 - divsAttemptsArray.length} טעויות. 
    <button class="startOver win" onclick="newGame()">  << לחץ כאן למשחק חוזר</button>`;

    document.body.appendChild(right);
}
// function worng() {
//     divsAttemptsArray[0].style.backgroundColor = "red";
//     divsAttemptsArray.splice(0, 1);
//     if (divsAttemptsArray.length == 2) {
//         const span = document.createElement("span");
//         span.innerHTML = "נשארו עוד 2 ניסיונות";
//         attempts.appendChild(span);
//     }
// };

//פונקציה שמחזירה T/F אם קיימת אות יותר מפעם אחת
function moreThenOneLetter(array) {
    for (let i = 0; i < array.length; i++) {
        for (let y = i; y <= array.length; y++) {
            let chack = array[i];
            if (chack == array[y]) {
                return true;
            } else {
                x = false;
            }

        }
        return x;
    }
}

function newGame() {
    loader(true);
    setTimeout(() => {
        location.reload();

        loader(false);
    }, 3 * 1000);

}


function loader(isShowing = false) {
    const loaderFrame = document.querySelector('.loaderFrame');

    if (isShowing) {
        loaderFrame.style.display = 'flex';
    } else {
        loaderFrame.style.display = 'none';
    }
}