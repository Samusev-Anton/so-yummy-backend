const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(
    _id,
    { subscription: subscription },
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, `Not Found user with ID=${_id}`);
  }
  res.json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = updateSubscription;
