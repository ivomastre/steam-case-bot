const axios = require("axios");
const fs = require("fs");

const { steamId, sessionId, steamApiKey } = require("../../credentials.json");

const getFriendList = async () => {
  const { data } = await axios.get(
    "http://api.steampowered.com/ISteamUser/GetFriendList/v0001",
    {
      params: {
        key: steamApiKey,
        steamid: steamId,
        relationship: "friend",
      },
    }
  );

  const {
    friendslist: { friends },
  } = data;

  return friends;
};

module.exports = getFriendList;
