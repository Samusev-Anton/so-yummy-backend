const cloudinary = require("cloudinary").v2;
const { Unauthorized } = require("http-errors");
const { Recipe } = require("../../models");
const { HttpError } = require("../../helpers");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const addRecipe = async (req, res, next) => {
  const { _id } = req.user;
  if (!_id) {
    throw new Unauthorized(`Please authorize`);
  }
  let thumb = null;

  try {
    if (req.file) {
      const updateResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "recipes",
      });
      thumb = updateResult.secure_url;
    }
  } catch (error) {
    throw HttpError(400, "Failed to create new Recipe!");
  }

  const newRecipe = { ...req.body, owner: _id, thumb };

  const ownerRecipe = await Recipe.create(newRecipe);

  res.status(201).json({
    status: "success",
    // code: 201,
    data: ownerRecipe,
  });
};

module.exports = addRecipe;
