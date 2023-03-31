const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");

// const cloudinary = require("cloudinary").v2;

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const avatarUpdate = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;

  try {
    const prepareImg = await jimp.read(tempUpload);
    await prepareImg
      .autocrop()
      .cover(
        100,
        100,
        jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(tempUpload);

    const resultUpload = path.join(avatarsDir, `${_id}${originalname}`);
    await fs.rename(tempUpload, resultUpload);
    // const avatarURL = path.join("public", "avatars", `${_id}${originalname}`);
        const avatarURL = path.join(
          "avatars",
          `${_id}${originalname}`
        );

    const result = await User.findByIdAndUpdate(
      _id,
      { avatarURL: avatarURL },
      { new: true }
    );

    const { email } = result;
    res.json({
      status: "success",
      code: 201,
      user: {
        email,
        avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = avatarUpdate;
