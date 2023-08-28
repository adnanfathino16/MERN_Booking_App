import { differenceInCalendarDays, format } from "date-fns";
import { GoCalendar, GoMoon } from "react-icons/go";

const BookingDates = ({ booking, className }) => {
  return (
    <div className={`flex items-center gap-1 ${className} `}>
      <GoMoon />
      {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights:
      <div className="flex items-center gap-1 ml-2">
        <GoCalendar />
        {format(new Date(booking.checkIn), "yyyy-MM-dd")}
      </div>
      &rarr;
      <div className="flex items-center gap-1">
        <GoCalendar />
        {format(new Date(booking.checkOut), "yyyy-MM-dd")}
      </div>
    </div>
  );
};

export default BookingDates;
