const cloudinary = require("./../db/cloudinary");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

const uploadFile = (req, res, next) => {
  upload.single("profilePic")(req, res, async (err) => {
    if (err) return next(err);

    if (!req.file) return next();

    try {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "chat-app/profile-pictures",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        stream.end(req.file.buffer);
      });

      req.profilePicUrl = result.secure_url;
      req.public_id = result.public_id;

      next();
    } catch (err) {
      next(err);
    }
  });
};

module.exports = uploadFile;