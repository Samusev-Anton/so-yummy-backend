const {
  uploadToCloudinary,
  destroyToCloudinary,
} = require("../../middlewares/uploadCloud");
const { HttpError } = require("../../helpers");
const { bufferToDataURI } = require("../../helpers");
const { User } = require("../../models");

const updateAvatarToCloud = async (req, res, next) => {
  const { file } = req;
  const { _id, avatarCloudId: findAvatar } = req.user;

  if (findAvatar) {
    await destroyToCloudinary(findAvatar);
  }

  if (!file) throw HttpError(400, "Image is required");

  const fileFormat = file.mimetype.split("/")[1];
  const { base64 } = bufferToDataURI(fileFormat, file.buffer);

  const { public_id: avatarCloudId, secure_url: avatarURL } =
    await uploadToCloudinary(base64, fileFormat);

  await User.findByIdAndUpdate(
    _id,
    { avatarURL: avatarURL, avatarCloudId },
    { new: true }
  );

  res.json({
    status: "success",
    message: "Upload successful",
    data: {
      avatarCloudId,
      avatarURL,
    },
  });
};

module.exports = updateAvatarToCloud;
