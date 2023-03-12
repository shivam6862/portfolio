const getDb = require("./db").getDb;

module.exports = insertComment = async (comment) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("comment")
    .insertOne({ comment: comment });
  return insertedId;
};
