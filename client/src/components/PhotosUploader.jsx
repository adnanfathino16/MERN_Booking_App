import { useState } from "react";
import { AiOutlineCloudUpload, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import axios from "axios";

const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    await axios
      .post("/upload/by-link", { link: photoLink })
      .then((response) => {
        onChange((prev) => {
          return [...prev, response.data];
        });
        setPhotoLink("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadPhotoByLocal = (e) => {
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload/local", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  };

  const removePhoto = (e, filename) => {
    e.preventDefault();
    onChange([...addedPhotos.filter((photo) => photo !== filename)]); //terakhir disini 4:40
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();
    const newAddedPhotos = [filename, ...addedPhotos.filter((photo) => photo !== filename)];
    onChange(newAddedPhotos);
  };

  return (
    <>
      <div className="flex gap-2">
        <input type="text" value={photoLink} onChange={(e) => setPhotoLink(e.target.value)} placeholder="Add using a link ....jpg" />
        <button onClick={addPhotoByLink} className="bg-gray-200 px-4 rounded-2xl">
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link, index) => (
            <div className="h-32 flex relative" key={index}>
              <img className="rounded-2xl w-full object-cover" src={`https://api-booking-app-production.up.railway.app/uploads/${link}`} alt={link} />
              <button onClick={(e) => removePhoto(e, link)} className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                <GoTrash />
              </button>
              <button onClick={(e) => selectAsMainPhoto(e, link)} className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3">
                {link === addedPhotos[0] && <AiFillStar />}
                {link !== addedPhotos[0] && <AiOutlineStar />}
              </button>
            </div>
          ))}
        <label className="h-32 cursor-pointer flex gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input multiple type="file" className="hidden" onChange={uploadPhotoByLocal} />
          <AiOutlineCloudUpload />
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;
