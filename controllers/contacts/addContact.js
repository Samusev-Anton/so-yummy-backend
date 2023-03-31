const { Contact } = require("../../models");

const addContact = async (req, res, next) => {
  const { _id } = req.user;
  const newContact = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: newContact,
  });
};

module.exports = addContact;
