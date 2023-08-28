import download from "image-downloader";
import __dirname from "../../__dirname.js";

export const imageDownloader = async (link, newName) => {
  return await download.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });
};
