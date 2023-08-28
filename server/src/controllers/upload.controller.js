import { imageDownloader } from "../services/upload.service.js";
import fs from "fs";

export const uploadByLink = async (req, res) => {
  try {
    const { link } = req.body;
    const newName = "photo" + Date.now() + ".jpg";
    await imageDownloader(link, newName);
    return res.json(newName);
  } catch (error) {
    return res.json(error);
  }
};

export const uploadByLocal = (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname, filename } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const rename = path + "." + ext;
    fs.renameSync(path, rename);
    uploadedFiles.push(filename + "." + ext);
  }
  return res.json(uploadedFiles);
};
