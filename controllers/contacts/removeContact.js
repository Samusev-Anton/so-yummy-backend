const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new HttpError(404, `Not Found ID=${contactId}`);
  }
  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = removeContact;
