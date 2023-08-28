import { PiMapPin } from "react-icons/pi";
const AddressLink = ({ children, className = null }) => {
  if (!className) {
    className = " my-3 block";
  }
  className += " flex gap-1 items-center font-semibold underline";
  return (
    <a className={className} target="_blank" href={`https://maps.google.com/?q=${children}`}>
      <PiMapPin />
      {children}
    </a>
  );
};

export default AddressLink;
