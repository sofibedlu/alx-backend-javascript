export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const updated = listStudents
    .filter((item) => item.location === city)
    .map((item) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === item.id);
      const updatedItem = { ...item };
      updatedItem.grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return updatedItem;
    });

  return updated;
}
