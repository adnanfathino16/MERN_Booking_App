const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "h-full object-cover";
  }

  return <img className={className} src={`http://localhost:8000/uploads/${place.photos[index]}`} alt="" />;
};

export default PlaceImg;
