import {
  faHeart,
  faRectangleList,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBellConcierge,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  const navMenuItems = [
    { name: "Departments", link: "/" },
    { name: "services", link: "/" },
    { name: "Departments", link: "/" },
  ];

  return (
    <nav className="flex flex-col fixed top-0 left-0 w-full z-10">
      <div className="text-white flex flex-row justify-center space-x-4 items-center h-[88px] font-bold w-full z-30 px-4 bg-gradient-to-r from-indigo-500 to-purple-500">
        <p>OmniMart</p>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          <FontAwesomeIcon icon={faRectangleList} className="pr-2" />
          Departments
        </p>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden xl:block">
          <FontAwesomeIcon icon={faBellConcierge} className="pr-2" />
          Services
        </p>
        <form className="min-w-[60%] lg:min-w-fit flex">
          <input
            className="rounded-full px-8 py-2 font-normal w-full"
            placeholder="Search OmniMart"
          ></input>
          <button className="pl-3 pr-1 hover:bg-purple-800 rounded-full text-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-2" />
          </button>
        </form>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          <FontAwesomeIcon icon={faHeart} className="pr-2" />
          My Items
        </p>
        <div className="hover:bg-purple-800 p-4 rounded-full hidden lg:flex items-center">
          <FontAwesomeIcon icon={faUser} className="pr-2" />
          <div className="flex flex-col">
            <span className="font-normal text-sm">Sign In</span>
            Account
          </div>
        </div>
        <div className="hover:bg-purple-800 p-4 rounded-full flex flex-col">
          <FontAwesomeIcon icon={faCartShopping} />
          <p className="text-xs font-normal">$0.00</p>
        </div>
      </div>
      <div className="bg-purple-300 text-black flex flex-row space-x-8 items-center px-4 py-2 text-sm">
        <p>Philadelphia, 19148 - Milkyway Supercenter</p>
        <p>|</p>
        <p className="lg:hidden block hover:underline">Departments</p>
        <p className="xl:hidden block hover:underline">Services</p>
        <p className="hidden sm:block hover:underline">Deals</p>
        <p className="hidden lg:block hover:underline">Grocery</p>
        <p className="hidden md:block hover:underline">Essentials</p>
        <p className="hidden lg:block hover:underline">Fashion</p>
        <p className="hidden md:block hover:underline">Ship</p>
        <p className="hidden lg:block hover:underline">Electronics</p>
      </div>
    </nav>
  );
}
