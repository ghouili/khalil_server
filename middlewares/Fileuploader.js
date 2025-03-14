const multer = require("multer");
const { v1: uuid } = require("uuid");

const mime_type_map = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUploader = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      
      const ext = mime_type_map[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
});

module.exports = fileUploader;
