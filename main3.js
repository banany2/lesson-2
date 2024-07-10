function createStudent(name, surname, birthYear, grades = []) {
    return {
        name: name,
        surname: surname,
        birthYear: birthYear,
        grades: grades,
        attendance: Array(25).fill(null),

        getAge: function() {
            const currentYear = new Date().getFullYear()
            return currentYear - this.birthYear
        },

        getAverageGrade: function () {
            if (this.grades.length === 0) return 0;
            const sum = this.grades.reduce((sum, grade) => sum + grade, 0)
            return sum / this.grades.length
        },

        present: function() {
            const index = this.attendance.indexOf(null);
            if (index !== -1) {
                this.attendance[index] = true;
            } else {
                console.log('Масив відвідуваності заповнений');
            }
        },

        absent: function() {
            const index = this.attendance.indexOf(null);
            if (index !== -1) {
                this.attendance[index] = false;
            } else {
                console.log('Масив відвідуваності заповнений');
            }
        },

        summary: function() {
            const totalClasses = this.attendance.filter(item => item !== null).length;
            const attendedClasses = this.attendance.filter(item => item === true).length;
            const averageAttendance = totalClasses === 0 ? 0 : attendedClasses / totalClasses;
            const averageGrade = this.getAverageGrade();

            if (averageGrade > 90 && averageAttendance > 0.9) {
                return "Молодець!";
            } else if (averageGrade > 90 || averageAttendance > 0.9) {
                return "Добре, але можна краще";
            } else {
                return "Редиска!";
            }
        }
    };
}

const student1 = createStudent('Іван', 'Іванов', 2000, [95, 85, 92, 88, 90]);
const student2 = createStudent('Петро', 'Петров', 1999, [80, 75, 78, 82, 85]);
const student3 = createStudent('Марія', 'Марієнко', 2001, [60, 65, 70, 72, 68]);

student1.present();
student1.present();
student1.absent();
console.log(`${student1.name} ${student1.surname}, вік: ${student1.getAge()}, середній бал: ${student1.getAverageGrade()}`);
console.log(student1.summary());

student2.present();
student2.absent();
student2.present();
console.log(`${student2.name} ${student2.surname}, вік: ${student2.getAge()}, середній бал: ${student2.getAverageGrade()}`);
console.log(student2.summary());

student3.absent();
student3.absent();
student3.present();
console.log(`${student3.name} ${student3.surname}, вік: ${student3.getAge()}, середній бал: ${student3.getAverageGrade()}`);
console.log(student3.summary());