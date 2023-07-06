// run `node index.js` in the terminal
let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

function compareStudents(studentA, studentB) {
  if (studentA.biology !== studentB.biology) {
    return studentB.biology - studentA.biology;
  }

  if (studentA.chemistry !== studentB.chemistry) {
    return studentB.chemistry - studentA.chemistry;
  }

  const dateA = new Date(studentA.dob);
  const dateB = new Date(studentB.dob);
  return dateA - dateB;
}

function sortStudents(students) {
  return students.sort(compareStudents);
}

console.log("Test Case 1:");
console.log(sortStudents(testCase1));

console.log("Test Case 2:");
console.log(sortStudents(testCase2));
