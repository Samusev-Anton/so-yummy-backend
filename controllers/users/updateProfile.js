const cloudinary = require("cloudinary").v2;
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const updateProfile = async (req, res) => {
  const { _id } = req.user;

  try {
    let avatarURL = null;
    if (req.file) {
      const updateResult = await cloudinary.uploader.upload(req.file.path, {
        folder: "avatars",
      });
      avatarURL = updateResult.secure_url;
    }

    let name = null;
    if (req.body.name) {
      name = req.body.name;
    }

    const updatedFields = {};
    if (avatarURL) {
      updatedFields.avatarURL = avatarURL;
    }
    if (name) {
      updatedFields.name = name;
    }

    const updatedUser = await User.findByIdAndUpdate(_id, updatedFields, {
      new: true,
    });
    // const updatedUser = await User.findById(_id);
    res.json(updatedUser);
  } catch (error) {
    throw HttpError(500, "Failed to update profile!");
  } finally {
    if (req.file) {
      cloudinary.uploader.destroy(req.file.path);
    }
  }
};

module.exports = updateProfile;
