import * as fs from 'node:fs'

function main() {
  // Get command line arguments and discard first 2 arguments.
  const cliArgs = process.argv.slice(2)

  if (cliArgs.length !== 2) {
    console.error('use: upper-file INPUT_FILE OUTPUT_FILE')
    return
  }

  const inputFileName = cliArgs[0] as string
  const outputFileName = cliArgs[1] as string

  const inputFileContent = fs.readFileSync(inputFileName).toString()
  const lines = inputFileContent.split('\n')

  const outputFile = fs.openSync(outputFileName, 'w')

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
