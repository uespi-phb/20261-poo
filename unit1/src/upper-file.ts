import * as fs from 'node:fs'

function main(): void {
  // Get command line arguments and discard first 2 arguments.
  const cliArgs = process.argv.slice(2)

  if (cliArgs.length !== 2) {
    console.error('use: upper-file INPUT_FILE OUTPUT_FILE')
    return
  }

  const inputFileName = cliArgs[0] as string
  const outputFileName = cliArgs[1] as string

  let inputFileContent: string
  try {
    inputFileContent = fs.readFileSync(inputFileName).toString()
  } catch {
    console.error(`Erro ao abrir arquivo: ${inputFileName}`)
    return
  }
  const lines = inputFileContent.split('\n')

  let outputFile: number
  try {
    outputFile = fs.openSync(outputFileName, 'w')
  } catch {
    console.error(`Erro ao criar arquivo: ${inputFileName}`)
    return
  }

  console.log(`Reading from "${inputFileName}"`)
  console.log(`Writing to "${outputFileName}"`)

  let lineNumber = 0
  let previousLine = ' '
  for (const line of lines) {
    if (previousLine !== '' || line !== '') {
      fs.writeSync(outputFile, `${++lineNumber}: ${line.toUpperCase()}\n`)
    }
    previousLine = line
  }

  fs.closeSync(outputFile)
}

main()
