import { PiTelevisionSimpleBold, PiDoorOpenDuotone } from "react-icons/pi";
import { BiSolidCat, BiRadio } from "react-icons/bi";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";

const Perks = ({ selected, onChange }) => {
  const handleCbClick = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };

  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes("wifi")} name="wifi" onChange={handleCbClick} />
        <AiOutlineWifi />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes("parking")} name="parking" onChange={handleCbClick} />
        <AiOutlineCar />
        <span>Free Parking Spot</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes("tv")} name="tv" onChange={handleCbClick} />
        <PiTelevisionSimpleBold />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes("radio")} name="radio" onChange={handleCbClick} />
        <BiRadio />
        <span>Radio</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes("pets")} name="pets" onChange={handleCbClick} />
        <BiSolidCat />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes("entrance")} name="entrance" onChange={handleCbClick} />
        <PiDoorOpenDuotone />
        <span>Private Entrance</span>
      </label>
    </>
  );
};

export default Perks;
