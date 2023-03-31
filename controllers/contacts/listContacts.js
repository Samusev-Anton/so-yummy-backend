const { Contact } = require("../../models");

const listContacts = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const skip = (page - 1) * limit;

  const objSearch = favorite ? { owner: _id, favorite: true } : { owner: _id };

  const result = await Contact.find(objSearch, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email");

  // TODO:проверка на пустой массив
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = listContacts;
