enum Alignment {
  left,
  right,
  center,
}

type ColumnFormat = {
  width: number
  align: Alignment
}

function formatStrToObject(formatString: string): ColumnFormat {
  if (formatString.length < 2) throw new Error(`invalid format string: "${formatString}"`)

  const alignLeftChar = '<'
  const alignRightChar = '>'
  const alignCenterChar = '^'

  let align: Alignment
  switch (formatString[0]) {
    case alignLeftChar:
      align = Alignment.left
      break

    case alignRightChar:
      align = Alignment.right
      break

    case alignCenterChar:
      align = Alignment.center
      break

    default:
      throw new Error(`invalid format string: "${formatString}"`)
  }

  let width: number
  try {
    width = Number.parseInt(formatString.slice(1))
  } catch {
    throw new Error(`invalid format string: "${formatString}"`)
  }

  return {
    align,
    width,
  }
}

function formatData(data: string, format: ColumnFormat): string {
  let formattedData: string

  if (data.length > format.width) {
    data = data.slice(0, format.width)
  }

  switch (format.align) {
    case Alignment.left:
      formattedData = data.padEnd(format.width)
      break

    case Alignment.right:
      formattedData = data.padStart(format.width)
      break

    case Alignment.center:
      const size = Math.floor((format.width - data.length) / 2)
      formattedData = data.padStart(size + data.length)
      formattedData = formattedData.padEnd(format.width)
      break
  }

  return formattedData
}

export function formatLine(dataLine: string, format: string[], separatorChar: string = '\t'): string {
  const colunms = format.map(formatStrToObject)
  const data = dataLine.split(separatorChar)

  let line = ''
  for (let index = 0; index < colunms.length; index++) {
    line += formatData(data[index]!, colunms[index]!)
  }

  return line
}

export function printFormatted(dataLine: string, format: string[], separatorChar: string = '\t'): void {
  console.log(formatLine(dataLine, format, separatorChar))
}

export function printLine(width: number, lineChar: string = '-'): void {
  console.log(lineChar.repeat(width))
}
