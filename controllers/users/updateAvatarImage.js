const cloudinary = require("cloudinary").v2;
const path = require("path");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const updateAvatarImage = async (req, res) => {
  const { _id } = req.user;

  try {
    const resultUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "avatars",
    });

    await User.findByIdAndUpdate(_id, { avatarURL: resultUpload.secure_url });
    res.json({ avatarURL: resultUpload.secure_url });
  } catch (error) {
    throw HttpError(500, "Failed to upload avatar!");
  } finally {
    cloudinary.uploader.destroy(req.file.path);
  }
};

module.exports = updateAvatarImage;
