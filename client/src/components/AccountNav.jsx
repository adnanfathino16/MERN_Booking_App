import { Link, useLocation } from "react-router-dom";
import { BiUser, BiListUl } from "react-icons/bi";
import { TbBuildingWarehouse } from "react-icons/tb";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2]; //['', 'account, 'bookings']
  if (subpage === undefined) {
    subpage = "profile";
  }
  const linkClasses = (type = null) => {
    let classes = "flex gap-1 items-center py-2 px-6 rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  };
  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className={linkClasses("profile")} to={"/account"}>
        <BiUser />
        My Profile
      </Link>
      <Link className={linkClasses("bookings")} to={"/account/bookings"}>
        <BiListUl />
        My Bookings
      </Link>
      <Link className={linkClasses("places")} to={"/account/places"}>
        <TbBuildingWarehouse />
        My Accommodations
      </Link>
    </nav>
  );
};

export default AccountNav;
