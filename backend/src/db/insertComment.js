const getDb = require("./db").getDb;

module.exports = insertComment = async ({ name, emailValue, message }) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("comment")
    .insertOne({ name: name, emailValue: emailValue, message: message });
  return insertedId;
};
