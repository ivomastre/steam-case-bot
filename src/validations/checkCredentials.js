const { readJsonFile } = require('../utils/index')

const checkCredentials = () => {
  const { sessionId, steamApiKey, steamId } = readJsonFile('credentials.json')

  if (!sessionId || !steamApiKey || !steamId) {
    throw new Error('Missing credentials')
  }
}

module.exports = checkCredentials
