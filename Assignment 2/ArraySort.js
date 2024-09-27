const students = [
    { name: "Kajal", grade: 85 },
    { name: "Priya", grade: 92 },
    { name: "Neha", grade: 78 },
    { name: "Kiran", grade: 95 },
    { name: "Sejal", grade: 88 },
    { name: "Rahul", grade: 76 },
  ];
  
  students.sort((a, b) => a.grade - b.grade);
  
  console.log("Sorted Students by Grade:");
  students.forEach((student) => {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
  });