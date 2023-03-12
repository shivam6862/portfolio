const getDb = require("./db").getDb;

module.exports = getComments = async () => {
  const connection = await getDb();
  const comment = await connection.collection("comment").find().toArray();
  return comment;
};
