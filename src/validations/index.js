const checkCredentials = require('./checkCredentials')
const checkFriendsFile = require('./checkFriendsFile')

const wrap = (fn) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(fn())
    } catch (error) {
      reject(error)
    }
  })
}

const VALIDATIONS = [wrap(checkCredentials), wrap(checkFriendsFile)]

const runValidations = async () => {
  const promisesValue = await Promise.allSettled(VALIDATIONS)

  for (const value of promisesValue) {
    if (value.status === 'rejected') {
      console.log(`A error was found: ${value.reason.message}`)
      process.exit(0)
    }
  }
}

module.exports = runValidations
