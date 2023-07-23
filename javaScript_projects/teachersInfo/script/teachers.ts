interface Teacher {
    id: number;
    idNumber: number;
    fullName: string;
    age: number;
    gender: genderTypes[];
    phone: string;
    numClasses: number;
    subjects: subjectsTypes[];
    seniority: number;
    salary: number;
    sickDayUsed: number;
    grades: number[];

}

type subjectsTypes = ' פיזיקה' | ' מתמטיקה' | ' ספרות' | ' היסטוריה' | ' אזרחות' | ' תנ"ך' | ' ביולוגיה' | ' כימיה' | ' אנגלית' | ' לשון' | ' ספורט';


type genderTypes = 'זכר' | 'נקבה';


class TeachersInfo {

    teachers: Teacher[] = [
        {
            id: 1,
            idNumber: 2125548,
            fullName: "ליאור עמית",
            age: 27,
            gender: ['נקבה'],
            phone: '058-245-7899',
            numClasses: 5,
            subjects: [' כימיה', ' ביולוגיה'],
            seniority: 4,
            salary: 8000,
            sickDayUsed: 3,
            grades: [99, 65, 78, 100, 54, 88, 96, 58, 84, 78, 100, 55, 66, 87, 98, 55, 77, 100, 66, 93, 95, 98, 65, 66, 88, 89, 100, 60, 99],
        },
        {
            id: 2,
            idNumber: 23665987,
            fullName: "ירון בן דואני",
            age: 30,
            gender: ['זכר'],
            phone: '052-852-5692',
            numClasses: 5,
            subjects: [' ספרות'],
            seniority: 4,
            salary: 6000,
            sickDayUsed: 5,
            grades: [99, 66, 78, 100, 65, 88, 96, 58, 100, 78, 100, 55, 88, 87, 98, 88, 100, 66, 93, 95, 98, 100, 66, 99, 89, 100, 60, 99, 100, 88, 99],
        },
        {
            id: 3,
            idNumber: 2255887,
            fullName: "רוני גנון",
            age: 25,
            gender: ['נקבה'],
            phone: '055-789-3331',
            numClasses: 5,
            subjects: [' היסטוריה', ' אזרחות', ' תנ"ך'],
            seniority: 3,
            salary: 8500,
            sickDayUsed: 2,
            grades: [99, 65, 78, 100, 65, 88, 96, 58, 100, 78, 87, 99, 88, 66, 98, 88, 77, 100, 88, 88, 95, 66, 100, 66, 99, 89, 99, 60, 99, 100, 88, 88],
        },
        {
            id: 4,
            idNumber: 1154875,
            fullName: "רבקה דוד",
            age: 45,
            gender: ['נקבה'],
            phone: '052-566-6648',
            numClasses: 6,
            subjects: [' מתמטיקה', ' פיזיקה'],
            seniority: 7,
            salary: 9000,
            sickDayUsed: 6,
            grades: [100, 66, 78, 100, 65, 100, 96, 100, 100, 87, 100, 87, 88, 66, 98, 88, 77, 100, 87, 93, 95, 98, 100, 87, 99, 89, 100, 66, 99, 66, 88, 100],
        },
        {
            id: 5,
            idNumber: 22547816,
            fullName: "תקווה ימית",
            age: 33,
            gender: ['נקבה'],
            phone: '055-664-7175',
            numClasses: 3,
            subjects: [' ספורט'],
            seniority: 7,
            salary: 9000,
            sickDayUsed: 5,
            grades: [100, 100, 90, 100, 80, 100, 100, 100, 100, 90, 100, 90, 80, 90, 100, 90, 100, 100, 90, 100, 90, 80, 100, 100, 90, 100, 100, 100, 90],
        },
        {
            id: 6,
            idNumber: 22875445,
            fullName: "נטע לביא",
            age: 35,
            gender: ['נקבה'],
            phone: '058-777-9452',
            numClasses: 4,
            subjects: [' לשון'],
            seniority: 4,
            salary: 9500,
            sickDayUsed: 10,
            grades: [77, 88, 90, 100, 80, 68, 65, 100, 100, 91, 99, 90, 80, 90, 60, 61, 66, 78, 100, 87, 90, 100, 88, 80, 90],
        },
    ];

    constructor() {
        console.log("היי");
        const elem = document.querySelector('.frameTeachers');

        this.teachers.forEach(t => {
            const divFrame = document.createElement("div");
            divFrame.className = 'teachers';


            divFrame.innerHTML = `${t.fullName} <button id="myBtn">פתח</button>`;

            divFrame.querySelector('#myBtn')?.addEventListener("click", () => this.open(t.id));
            elem?.appendChild(divFrame);
        });

    }

    open(tId: number) {
        const elem = document.querySelector('.frameTeachers');
        const i = this.teachers.findIndex(x => x.id == tId);

        const info = document.createElement("div");
        info.className = 'info';
        info.innerHTML = `
        <div class="modalframe">
            <button class="close">X</button>
            <p>מס' עובד: ${this.teachers[i].id}</p>
            <p>ת.ז : ${this.teachers[i].idNumber}</p>
            <p>שם מלא : ${this.teachers[i].fullName}</p>
            <p>גיל : ${this.teachers[i].age}</p>
            <p>מגדר : ${this.teachers[i].gender}</p>
            <p>טלפון : ${this.teachers[i].phone}</p>
            <p>שנות ותק : ${this.teachers[i].seniority}</p>
            <p>משכורת חודשית :   ${this.teachers[i].salary}  ש"ח  | משכורת שנתית (ברוטו) : <span>${this.annualSalary(this.teachers[i].salary)} ש"ח</span></p>
            <p>ימי מחלה שנוצלו: ${this.teachers[i].sickDayUsed} | ימי מחלה שנשארו : <span> ${this.sickDayLeft(this.teachers[i].sickDayUsed)}</span></p>
            <p>מספר כיתות לימוד: ${this.teachers[i].numClasses} | מספר התלמידים הכולל : <span>${this.students(this.teachers[i].numClasses, this.teachers[i].grades)}</span> </p>
            <p>מקצועות לימוד: ${this.teachers[i].subjects}</p>
            <button class="avgStudents">לחץ לחישוב ממוצע הציונים של כיתה אקראית</button>
            <p></p>
            
            
            </div>
            `;


        info.querySelector('.close')?.addEventListener("click", () => {
            info.style.display = "none";
        });
        info.querySelector('.avgStudents')?.addEventListener("click", () => {
            const avg = document.createElement("div");
            avg.className = 'avg';
            avg.innerHTML = ` ממוצע הציונים בכיתה אקראית הוא:  ${this.averageGrades(this.teachers[i].grades)}  `;

            info.querySelector('.modalframe')?.appendChild(avg);
        });


        elem?.appendChild(info);
        console.log("סיימתי");

    }


    grades: number[] = [];


    students(sumClass: number, grades: number[]) {
        //בהנחה שמספר התלמידים בכיתות שווה
        const numStudents: number = grades.length;
        console.log(numStudents * sumClass)
        return numStudents * sumClass;
    }

    averageGrades(numStudents: number[]) {
        let sum: any = 0;
        for (let i = 0; i < numStudents.length; i++) {
            sum += numStudents[i];
        }

        const avg: number = Math.floor(sum / numStudents.length);
        console.log(avg)
        console.log(this.grades)

        return avg;
    }

    annualSalary(oneSalary: number) {
        console.log(oneSalary * 12)
        return oneSalary * 12;
    }

    sickDayLeft(dayUsed: number) {
        const sickDayByYear = 14;
        console.log(sickDayByYear - dayUsed)
        const left = sickDayByYear - dayUsed
        return left;

    }
}


const t = new TeachersInfo;
