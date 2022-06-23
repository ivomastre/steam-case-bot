const { readJsonFile } = require('../utils/index')

const checkFriendsFile = () => {
  const friends = readJsonFile('friends.json')

  if (!friends || !friends.length) {
    throw new Error('Friends file is empty')
  }
}

module.exports = checkFriendsFile
