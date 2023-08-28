import multer from "multer";

export const photosMiddleware = multer({
  dest: "uploads",
}).array("photos", 100);
