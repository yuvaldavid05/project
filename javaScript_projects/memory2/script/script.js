let nameCategory = null;
const frame = document.querySelector(".frame");
const wordFrame = document.querySelector(".wordFrame");
const keyboardFrame = document.querySelector(".keyboardFrame");
const attempts = document.querySelector(".attempts");

const arrayAB = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', 'ך', 'מ', 'ן', 'ף', 'ץ'];
let divs = [];
const divsAttemptsArray = [];

const category = {
    cities: ["חיפה", "נס-ציונה", "אילת", "תל-אביב"],
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
        case 'cities': nameCategory = "ערים"; break;
        case 'movies': nameCategory = "סרטים"; break;
        case 'animals': nameCategory = "חיות"; break;
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

    const attempts = document.querySelector(".attempts");
    for (let i = 0; i < 6; i++) {
        const divsAttempts = document.createElement("div");
        divsAttempts.className = "divsAttempts";
        divsAttemptsArray.push(divsAttempts);
        attempts.appendChild(divsAttempts);
    }

    //יצירה של המקלדת
    for (let i = 0; i < arrayAB.length; i++) {
        const letterAB = document.createElement("div");
        letterAB.className = "letterAB";
        letterAB.innerHTML = arrayAB[i];
        keyboardFrame.appendChild(letterAB);

        letterAB.addEventListener("click", (ev) => {


            divsAttemptsArray[0].style.backgroundColor = "red";
            divsAttemptsArray.splice(0, 1);
            if (divsAttemptsArray.length == 2) {
                const span = document.createElement("span");
                span.innerHTML = "נשארו עוד 2 ניסיונות";
                attempts.appendChild(span);
            }

            const letterABclicked = ev.target.innerHTML;
            console.log(letterABclicked);

            let x = 0;
            for (l of wordRandom) {
                if (letterABclicked == l) {
                    const placeLetter = x;
                    divs[placeLetter].innerHTML = letterABclicked;
                    if (moreThenOneLetter(wordRandom) == true) {
                        x++;
                    }

                    console.log(x);
                    console.log("מצאתי");
                    console.log(l);
                    console.log(letterABclicked);
                } else {
                    x++;
                }
                worng();
            }
        })
    }




    console.log(divs);
    console.log(categoryPicked);
    console.log(c[randomWord]);
    console.log(nameCategory);



}
game();

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

