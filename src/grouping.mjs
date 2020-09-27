/*
 *
 * The groupBy() function splits a list into sub-lists stored in an object,
 * based on the result of calling a String-returning function on each element,
 * and grouping the results according to values returned.
 *
 * $ node -r esm grouping.mjs
 * Student(s) having A grade:
 * [ { name: 'Romano', score: 93 } ]
 * Student(s) having B grade:
 * [ { name: 'Adan', score: 84 }, { name: 'Javier', score: 88 } ]
 * Student(s) having C grade:
 * [ { name: 'Lucy', score: 69 } ]
 * Student(s) having D grade:
 * [ { name: 'Pedro', score: 69 } ]
 * Student(s) having F grade:
 * [ { name: 'Eduardo', score: 58 }, { name: 'Juana', score: 56 } ]
 *
 */

import { groupBy } from 'ramda';

const students = [
    { name: 'Adan', score: 84 },
    { name: 'Eduardo', score: 58 },
    { name: 'Pedro', score: 69 },
    { name: 'Romano', score: 93 },
    { name: 'Juana', score: 56 },
    { name: 'Lucy', score: 76 },
    { name: 'Javier', score: 88 },
];

const groupByGrade = groupBy((student) => {
    let score = student.score;

    return score < 65 ? 'F' :
            score < 70 ? 'D' :
            score < 80 ? 'C' :
            score < 90 ? 'B' : 'A';
});

const grouped = groupByGrade(students);
console.log('Student(s) having \`A\` grade:');
console.log(grouped['A']);

console.log('Student(s) having \`B\` grade:');
console.log(grouped['B']);

console.log('Student(s) having \`C\` grade:');
console.log(grouped['C']);

console.log('Student(s) having \`D\` grade:');
console.log(grouped['D']);

console.log('Student(s) having \`F\` grade:');
console.log(grouped['F']);
