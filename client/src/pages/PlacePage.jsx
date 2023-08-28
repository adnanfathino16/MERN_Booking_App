import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";

const PlacePage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get("/places/user-places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        list of all added places
        <br />
        <Link to={"/account/places/new"} className="inline-flex items-center bg-primary text-white py-2 px-6 rounded-full">
          <GoPlus />
          Add New Place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place, index) => (
            <Link to={`/account/places/${place._id}`} key={index} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
              <div className="flex w-32 h-32 bg-gray-300 shrink-0">
                <PlaceImg place={place} />
              </div>
              <div className="">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PlacePage;
