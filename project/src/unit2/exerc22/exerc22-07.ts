/*
class Enrollment {
  public readonly studentName: string
  public readonly courseCode: string
  public readonly entryYear: number

  constructor(studentName: string, courseCode: string, entryYear: number) {
    this.studentName = studentName
    this.courseCode = courseCode
    this.entryYear = entryYear
  }
}
*/

class Enrollment {
  constructor(
    public readonly studentName: string,
    public readonly courseCode: string,
    public readonly entryYear: number,
  ) {}
}

const enrolments = [
  new Enrollment('Ana Paula', 'TSCPHB', 2025),
  new Enrollment('João Maria', 'DIRPHB', 2024),
  new Enrollment('Helen Gera', 'HISPHB', 2023),
]

for (let index = 0; index < enrolments.length; index++) {
  const enrolment = enrolments[index]!

  console.log(`Aluno #${index + 1}:`)
  console.log(`- Nome : ${enrolment.studentName}`)
  console.log(`- Curso: ${enrolment.courseCode}`)
  console.log(`- Ano  : ${enrolment.entryYear}\n`)
}
