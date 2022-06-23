const { getFriendList } = require("../api");
const fs = require("fs");

const job = async () => {
  const friends = await getFriendList().catch(console.log);
  console.log(friends);

  await fs.promises.writeFile("friends.json", JSON.stringify(friends, null, 2));
};

job();
