const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const checkPhotoLimit = require("../middleware/checkPhotoLimit");
const multer = require("multer");
const upload = multer({});

router.post(
  "/upload",
  auth,
  upload.array("photos"),
  checkPhotoLimit,
  async (req, res) => {
    try {
      const user = req.user;
      user.photoCount += req.files.length;
      await user.save();

      res.json({
        success: true,
        message: "Fotoğraflar başarıyla yüklendi",
        newPhotoCount: user.photoCount,
      });
    } catch (error) {
      res.status(500).json({ error: "Sunucu hatası" });
    }
  }
);
