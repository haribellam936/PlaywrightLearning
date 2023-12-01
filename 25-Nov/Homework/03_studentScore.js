let studentScore = 85;
function calculateGrade(score) {
let grade;
    switch (true) {
            case score >= 80:
                grade = 'A+';
                break;
            case score >= 60:
                grade = 'A-';
                break;
            case score >= 50:
                grade = 'B+';
                break;
            case score >= 40:
                grade = 'B';
                break;
        default:
            grade = 'F';
    }
    return grade;
}
const result = calculateGrade(studentScore);
console.log(`The grade for the student with a score of ${studentScore} is: ${result}`);