const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  console.log(req.body);
  const data = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!data) {
    throw new HttpError(404, `Not Found ID=${contactId}`);
  }
  res.json({
    status: "success",
    code: 201,
    data,
  });
};

module.exports = updateContact;
