const insertComment = require("../db/insertComment");

module.exports = addCommentRoute = {
  method: "post",
  path: "/comment",
  handler: async (req, res) => {
    const data = req.body;
    const comment = data.comment;
    const response = await insertComment(comment);
    res.status(200).json(response);
  },
};
