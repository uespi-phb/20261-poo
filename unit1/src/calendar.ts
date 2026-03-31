import { input, print } from './stdio'

function getDaysOfMonth(year: number, month: number): number {
  return new Date(year, month < 11 ? month : 0, 0).getDate()
}

function getFirstWeekDayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay()
}

function showCalendar(year: number, month: number): void {
  const firstWeekDayOfMonth = getFirstWeekDayOfMonth(year, month)
  const daysOfMonth = getDaysOfMonth(year, month)

  print(' D  S  T  Q  Q  S  S')

  let dayOfWeek = firstWeekDayOfMonth
  let weekDays = ''.padStart(3 * firstWeekDayOfMonth)
  for (let day = 1; day <= daysOfMonth; day++) {
    weekDays += day.toString().padStart(3)
    dayOfWeek++
    if (dayOfWeek > 6 || day === daysOfMonth) {
      print(weekDays)
      dayOfWeek = 0
      weekDays = ''
    }
  }
}

const yearMonth = input('Informe o mês (MM/AAAA): ')
const [monStr, yearStr] = yearMonth.split('/')
const month = parseInt(monStr!)
const year = parseInt(yearStr!)

showCalendar(year, month)
