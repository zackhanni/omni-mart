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
import Image from "next/image";
import Logo from "./Logo";

export default function Nav() {
  const navMenuItems = [
    { name: "Departments", link: "/" },
    { name: "services", link: "/" },
    { name: "Departments", link: "/" },
  ];

  return (
    <nav className="flex flex-col fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-indigo-950 to-purple-700 text-white">
      <div className="flex flex-row justify-center space-x-4 items-center h-[88px] font-bold w-full px-4">
        <div className="">
          <Logo />
        </div>
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
            name="nav-search"
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
            <span className="font-normal text-sm -mb-1">Sign In</span>
            Account
          </div>
        </div>
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faCartShopping} />
          <p className="text-xs font-normal pt-1">$0.00</p>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="flex flex-row space-x-6 items-center px-4">
        <div className="flex">
          <p className="hidden md:block">Philadelphia, 19148 - </p>
          <p>Milkyway Supercenter</p>
        </div>
        <p className="hidden sm:block">|</p>
        <p className="lg:hidden sm:block hidden hover:underline font-semibold">
          Departments
        </p>
        <p className="xl:hidden sm:block hidden hover:underline font-semibold">
          Services
        </p>
        <p className="hidden sm:block hover:underline font-semibold">Deals</p>
        <p className="hidden lg:block hover:underline font-semibold">Grocery</p>
        <p className="hidden lg:block hover:underline font-semibold">
          Essentials
        </p>
        <p className="hidden lg:block hover:underline font-semibold">Fashion</p>
        <p className="hidden lg:block hover:underline font-semibold">Ship</p>
        <p className="hidden lg:block hover:underline font-semibold">
          Electronics
        </p>
      </div>
    </nav>
  );
}
