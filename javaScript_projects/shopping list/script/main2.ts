const dayOne: string = "";
let dayIndex: number = 0;

const data = [
    { day: 0, event: 'לדוגמא' },
]

switch (dayOne) {
    case 'יום א': dayIndex = 0; break;
    case 'יום ב': dayIndex = 1; break;
    case 'יום ג': dayIndex = 2; break;
    case 'יום ד': dayIndex = 3; break;
    case 'יום ה': dayIndex = 4; break;
    case 'יום ו': dayIndex = 5; break;
    case 'יום ש': dayIndex = 6; break;
}

const obj = {};

data.forEach(x => {
    if (!obj[x.day]) {
        obj[x.day] = [];
    }

    obj[x.day].push(x);
});