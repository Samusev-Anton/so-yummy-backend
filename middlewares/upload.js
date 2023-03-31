const multer = require("multer");
const path = require("path");
const { HttpError } = require("../helpers");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
  limits: {
    fileSize: 2000000,
  },
  // как тут правильно обработать ошибку?
  fileFilter: async (req, file, cb) => {
    try {
      if (file.mimetype.includes(`image`)) {
        cb(null, true);
        return;
      }
      cb(null, false);
    } catch (error) {
      throw HttpError(400, "wrong data format");
    }
  },
});

module.exports = upload;
