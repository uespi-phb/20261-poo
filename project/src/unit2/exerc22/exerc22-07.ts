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
  private static courseCodes: string[] = ['TSCPHB', 'DIRPHB', 'HISPHB', 'BIOPHB']
  private static yearSequence: Record<string, number> = {}

  public readonly id: number

  constructor(
    public readonly studentName: string,
    public readonly courseCode: string,
    public readonly entryYear: number,
  ) {
    this.studentName = this.validateName(studentName)
    this.courseCode = this.validateCourseCode(courseCode)
    this.validateYear(entryYear)

    this.id = this.generateId(entryYear)
  }

  private generateId(entryYear: number): number {
    if (entryYear in Enrollment.yearSequence) {
      Enrollment.yearSequence[entryYear]!++
    } else {
      Enrollment.yearSequence[entryYear] = 1
    }
    return entryYear * 1000000 + Enrollment.yearSequence[entryYear]!
  }

  private validateName(name: string): string {
    if (name === '') {
      throw new Error('student name cannot be empty')
    }
    return name.trim()
  }

  private validateCourseCode(courseCode: string): string {
    courseCode = courseCode.trim()
    if (!Enrollment.courseCodes.includes(courseCode)) {
      throw new Error(`invalid course code: ${courseCode}`)
    }
    return courseCode
  }

  private validateYear(year: number): void {
    if (year < 1980 || year > 9999) {
      throw new Error(`invalid entry year: ${year}`)
    }
  }
}

const enrollments = [
  new Enrollment('Ana Paula', 'TSCPHB', 2025),
  new Enrollment('João Maria', 'DIRPHB', 2024),
  new Enrollment('Helen Gera', 'HISPHB', 2023),
  new Enrollment('Antônio Filho', 'BIOPHB', 2023),
  new Enrollment('Rodolfo Valentino', 'BIOPHB', 2024),
  new Enrollment('Paula Sousa', 'HISPHB', 2023),
]

for (let index = 0; index < enrollments.length; index++) {
  const enrollment = enrollments[index]!

  console.log(`Aluno #${index + 1}:`)
  console.log(`- Matr : ${enrollment.id}`)
  console.log(`- Nome : ${enrollment.studentName}`)
  console.log(`- Curso: ${enrollment.courseCode}`)
  console.log(`- Ano  : ${enrollment.entryYear}\n`)
}
