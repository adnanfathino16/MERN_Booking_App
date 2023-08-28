import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import axios from "axios";
import PlaceImg from "../components/PlaceImg";
import { GoCreditCard } from "react-icons/go";
import { Link } from "react-router-dom";
import BookingDates from "../components/BookingDates";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking, index) => (
            <Link to={`/account/bookings/${booking._id}`} key={index} className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-48 bg-red-200">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-2xl">{booking.place.title}</h2>
                <div className="text-xl">
                  <BookingDates booking={booking} className={"mb-2 mt-4 text-gray-500"} />
                  <div className="flex items-center gap-1 text-2xl">
                    <GoCreditCard />
                    Total price: ${booking.price}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
