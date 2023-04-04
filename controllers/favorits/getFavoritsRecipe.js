const { User } = require("../../models");
const HttpError = require("../../helpers/HttpError");

const getFavoritsRecipe = async (req, res, next) => {
  const { favoritsRecipe } = req.user;
  console.log(favoritsRecipe);

  // const result = await User.findById(favoritsRecipe);
  // if (!result) {
  //   throw HttpError(404, `Not Found ID=${favoritsRecipe}`);
  // }
  res.json({
    status: "success",
    code: 200,
    // data: {
    //   result,
    // },
  });
};

module.exports = getFavoritsRecipe;
