const checkPhotoLimit = async (req, res, next) => {
  try {
    const user = req.user;
    const uploadCount = req.files?.length || 0;

    const limits = {
      free: 1,
      premium: 10,
      pro: Infinity,
    };

    const currentLimit = limits[user.subscription || "free"];
    const remainingUploads = currentLimit - user.photoCount;

    if (uploadCount > remainingUploads) {
      return res.status(403).json({
        error:
          "Fotoğraf yükleme limitinize ulaştınız. Daha fazla fotoğraf yüklemek için planınızı yükseltin.",
        redirectTo: "/pricing",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası" });
  }
};

export default checkPhotoLimit;
