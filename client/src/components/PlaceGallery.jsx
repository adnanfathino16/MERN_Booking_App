import { useState } from "react";
import { CgClose, CgMenuGridO } from "react-icons/cg";

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
            <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-7 flex gap-1 items-center py-2 px-4 rounded-2xl shadow-md shadow-black bg-white text-black">
              <CgClose />
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div>
                <img src={`https://api-booking-app-production.up.railway.app/uploads/${photo}`} className="w-full" alt="" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div>
          <div>
            {place.photos?.[0] && <img onClick={() => setShowAllPhotos(true)} className="w-full cursor-pointer aspect-square object-cover" src={`https://api-booking-app-production.up.railway.app/uploads/${place.photos?.[0]}`} alt="" />}
          </div>
        </div>
        <div className="grid ">
          {place.photos?.[1] && <img onClick={() => setShowAllPhotos(true)} className="w-full cursor-pointer aspect-square object-cover" src={`https://api-booking-app-production.up.railway.app/uploads/${place.photos?.[1]}`} alt="" />}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img onClick={() => setShowAllPhotos(true)} className="w-full cursor-pointer aspect-square object-cover relative top-2" src={`https://api-booking-app-production.up.railway.app/uploads/${place.photos?.[2]}`} alt="" />
            )}
          </div>
        </div>
      </div>
      <button onClick={() => setShowAllPhotos(true)} className="flex items-center gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500">
        <CgMenuGridO />
        Show more photos
      </button>
    </div>
  );
};

export default PlaceGallery;
