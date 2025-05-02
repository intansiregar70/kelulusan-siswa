
const updatedStudents = students.map(student => {
  const nisnStr = student.nisn.toString();
  const newNisn = nisnStr.length === 10 ? "00" + nisnStr : nisnStr;
  return { ...student, nisn: newNisn };
});

// Menampilkan hasil (opsional)
console.log(updatedStudents);
