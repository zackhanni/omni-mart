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
    <nav className="sticky top-0 w-full z-10 bg-gradient-to-r from-indigo-950 to-purple-700 text-white px-2">
      {/* top section nav */}
      <div className="flex flex-row justify-center items-center font-bold w-full px-4 space-x-4 ">
        <div className="translate-y-1">
          <Logo />
        </div>

        <li className="hover:bg-purple-800 p-4 rounded-full hidden lg:block mb-0">
          <FontAwesomeIcon icon={faRectangleList} className="pr-2 text-xl" />
          Departments
        </li>

        <li className="hover:bg-purple-800 p-4 rounded-full hidden xl:block mb-0">
          <FontAwesomeIcon icon={faBellConcierge} className="pr-2 text-xl" />
          Services
        </li>

        <form className="min-w-[60%] lg:min-w-fit flex">
          <input
            className="rounded-full px-8 py-2 font-normal w-full"
            placeholder="Search OmniMart"
            name="nav-search"
          ></input>
          <button className="pl-3 pr-1 hover:bg-purple-800 rounded-full text-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="pr-2 text-xl"
            />
          </button>
        </form>

        <li className="hover:bg-purple-800 p-4 rounded-full hidden lg:block mb-0">
          <FontAwesomeIcon icon={faHeart} className="pr-2 text-xl" />
          My Items
        </li>

        <div className="hover:bg-purple-800 p-4 rounded-full hidden lg:flex items-center">
          <FontAwesomeIcon icon={faUser} className="pr-2 text-2xl" />
          <div className="flex flex-col">
            <span className="font-normal text-sm -mb-1">Sign In</span>
            Account
          </div>
        </div>

        <li className="flex flex-col">
          <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          <span className="text-xs font-normal">$0.00</span>
        </li>
      </div>
      <hr className="my-0 hidden md:block" />
      {/* bottom section nav */}
      <div className="hidden md:flex items-center h-full space-x-6 pl-4 py-2 text-sm">
        <li className="list-none flex">
          <span className="hidden lg:block">Philadelphia, 19148 - </span>
          Milkyway Supercenter
        </li>

        <li className="hidden sm:block">|</li>
        <li className="lg:hidden sm:block hidden hover:underline font-semibold">
          Departments
        </li>
        <li className="xl:hidden sm:block hidden hover:underline font-semibold">
          Services
        </li>
        <li className="hidden sm:block hover:underline font-semibold">Deals</li>
        <li className="hidden lg:block hover:underline font-semibold">
          Grocery
        </li>
        <li className="hidden md:block hover:underline font-semibold">
          Essentials
        </li>
        <li className="hidden lg:block hover:underline font-semibold">
          Fashion
        </li>
        <li className="hidden md:block hover:underline font-semibold">Ship</li>
        <li className="hidden lg:block hover:underline font-semibold">
          Electronics
        </li>
      </div>
    </nav>
  );
}
