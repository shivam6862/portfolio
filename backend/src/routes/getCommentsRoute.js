const getComments = require("../db/getComments");

module.exports = getCommentsRoute = {
  method: "get",
  path: "/comment",
  handler: async (req, res) => {
    const comments = await getComments();
    res.status(200).json(comments);
  },
};
