"use strict";
class TeachersInfo {
    constructor() {
        this.teachers = [
            {
                id: 1,
                fullName: "ליאור עמית",
                age: 27,
                gender: ['female'],
                phone: '058-245-7899',
                numClasses: 5,
                subjects: ['ספרות'],
                seniority: 4,
                salary: 8000,
                sickDayUsed: 3,
            },
            {
                id: 2,
                fullName: "ירון בן דואני",
                age: 30,
                gender: ['male'],
                phone: '058-245-7899',
                numClasses: 5,
                subjects: ['ספרות'],
                seniority: 4,
                salary: 8000,
                sickDayUsed: 5,
            },
        ];
        this.grades = [];
        console.log("היי");
        const elem = document.querySelector('.frameTeachers');
        this.teachers.forEach(t => {
            var _a;
            const divFrame = document.createElement("div");
            divFrame.className = 'teachers';
            divFrame.innerHTML = `${t.fullName} <button id="myBtn">פתח</button>`;
            (_a = divFrame.querySelector('#myBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.open(t.id));
            // const btn = divFrame.querySelector("#myBtn");
            // btn?.addEventListener('click', () => {
            //     const divInfo = document.createElement("div");
            //     divInfo.className = 'divInfo';
            //     divInfo.innerHTML = `
            //     <div>${t.id}</div>
            //     <div>${t.fullName}</div>
            //     <div>${t.phone}</div>
            //     `
            //     divFrame.appendChild(divInfo);
            // })
            elem === null || elem === void 0 ? void 0 : elem.appendChild(divFrame);
        });
    }
    open(tId) {
        var _a, _b, _c;
        const elem = document.querySelector('.frameTeachers');
        const i = this.teachers.findIndex(x => x.id == tId);
        const info = document.createElement("div");
        info.className = 'info';
        info.innerHTML = `
        <div class="modalframe">
            <button class="close">X</button>
            <p>ת.ז: ${this.teachers[i].id}</p>
            <p>שם מלא: ${this.teachers[i].fullName}</p>
            <p>גיל: ${this.teachers[i].age}</p>
            <p>מגדר: ${this.teachers[i].gender}</p>
            <p>טלפון: ${this.teachers[i].phone}</p>
            <p>מספר כיתות לימוד: ${this.teachers[i].numClasses}</p>

            <button class="students">לחישוב מספר התלמידים הכולל</button>

            <p>מקצועות לימוד: ${this.teachers[i].subjects}</p>
            <p>ותק: ${this.teachers[i].seniority}</p>
            <p>משכורת: ${this.teachers[i].salary}</p>
            <p>ימי מחלה שנוצלו: ${this.teachers[i].sickDayUsed}</p>

            <button class="sick">לבדיקת ימי מחלה שנשארו</button>
        </div>
        `;
        (_a = info.querySelector('.close')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            info.style.display = "none";
        });
        (_b = info.querySelector('.sick')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            const divSick = document.createElement("div");
            divSick.innerHTML = ` נשארו עוד: ${this.sickDayLeft(this.teachers[i].sickDayUsed)} ימים לניצול`;
            info.appendChild(divSick);
        });
        (_c = info.querySelector('.students')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            var _a;
            const divStudents = document.createElement("div");
            divStudents.innerHTML = `  מספר התלמידים שהמורה מלמד : ${this.students(this.teachers[i].numClasses)}`;
            (_a = info.querySelector('.students')) === null || _a === void 0 ? void 0 : _a.appendChild(divStudents);
        });
        elem === null || elem === void 0 ? void 0 : elem.appendChild(info);
        console.log("סיימתי");
    }
    students(sumClass) {
        //(מודולרי) בהנחה שבכל כיתה יש 30 תלמידים
        const numStudents = 30;
        console.log(numStudents * sumClass);
        return numStudents * sumClass;
    }
    averageGrades() {
        //מודולרי
        const numStudents = 30;
        // const grades: number[] = [];
        let sum = 0;
        for (let i = 1; i <= numStudents; i++) {
            const random = Math.floor(Math.random() * 46) + 55;
            this.grades.push(random);
            sum += random;
        }
        const avg = Math.floor(sum / numStudents);
        console.log(avg);
        console.log(this.grades);
        return avg;
    }
    annualSalary(oneSalary) {
        console.log(oneSalary * 12);
        return oneSalary * 12;
    }
    sickDayLeft(dayUsed) {
        const sickDayByYear = 14;
        console.log(sickDayByYear - dayUsed);
        return sickDayByYear - dayUsed;
    }
}
const t = new TeachersInfo;
