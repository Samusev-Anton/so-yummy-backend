const multer = require("multer");
const cloudinary = require("cloudinary");
const { HttpError } = require("../helpers");

const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const memoryStorage = multer.memoryStorage();

const uploadCloud = multer({
  storage: memoryStorage,
});

const { uploader } = cloudinary;

const uploadToCloudinary = async (fileString, format) => {
  try {
    // console.log(fileString);
    // console.log(format);
    const dataString = `data:image/${format};base64,${fileString}`;
    const res = await uploader.upload(dataString, {
      folder: "avatars",
      transformation: { width: 100, crop: "fill" },
    });
    // console.log(res);

    return res;
  } catch (error) {
    throw HttpError(500, error);
  }
};

const destroyToCloudinary = async (avatarCloudId) => {
  await uploader.destroy(avatarCloudId, (err, result) => {
    console.log(err, result);
  });
};

module.exports = {
  uploadCloud,
  uploadToCloudinary,
  destroyToCloudinary,
};
