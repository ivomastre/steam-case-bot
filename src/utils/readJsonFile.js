const fs = require('fs')

const readJsonFile = (fileName) => {
  const rawData = fs.readFileSync(fileName, { encoding: 'utf8' })

  return JSON.parse(rawData || '{}')
}

module.exports = readJsonFile
