const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: 'pdfs/',
    filename: (req, file, cb) => {
        const uniqueSuffix = `${req.user.email}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    }
});

exports.uploader = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const supportedImage = /pdf/;
        const extension = path.extname(file.originalname);
        if (supportedImage.test(extension)) {
            cb(null, true);
        } else {
            cb(new Error("Must be a pdf image"));
        }
    }
}); 