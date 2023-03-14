const insertComment = require("../db/insertComment");

module.exports = addCommentRoute = {
  method: "post",
  path: "/comment",
  handler: async (req, res) => {
    const data = req.body;
    const name = data.name;
    const emailValue = data.emailValue;
    const message = data.message;
    console.log(name, emailValue, message);
    const response = await insertComment({ name, emailValue, message });
    res.status(200).json(response);
  },
};
