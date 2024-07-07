import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Nav() {
  const navMenuItems = [
    { name: "Departments", link: "/" },
    { name: "services", link: "/" },
    { name: "Departments", link: "/" },
  ];

  return (
    <nav className="sticky top-0 w-full z-20 bg-gradient-to-r from-indigo-950 to-purple-700 text-white">
      {/* top section nav */}
      <div className="flex flex-row justify-between items-center font-bold w-full px-4 space-x-4">
        <Link href="/" className="translate-y-1">
          <Logo />
          {/* <Image
            src="../../public/logo.svg"
            width={71}
            height={65}
            alt="Omni Mart Logo"
          /> */}
        </Link>
        <form className="flex py-3 md:min-w-[60%]">
          <input
            className="rounded-full px-8 py-2.5 font-normal w-full"
            placeholder="Search OmniMart"
            name="nav-search"
          ></input>
          <button className="pl-3 pr-1 hover:underline rounded-full text-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5" />
          </button>
        </form>
        <div className="flex items-center space-x-8">
          <div className="no-underline text-white hover:underline rounded-full items-center flex flex-row">
            <FontAwesomeIcon icon={faUser} className="w-[17px] h-auto" />
            <div className="pl-2 flex flex-col">
              <span className="font-normal text-sm -mb-1">Sign In</span>
              Account
            </div>
          </div>
          <Link
            href="/"
            className="no-underline text-white flex flex-col items-center space-y-0.5"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-[20px] h-auto"
            />
            <span className="text-xs font-normal">$0.00</span>
          </Link>
        </div>
      </div>
      <hr className="my-0 hidden md:block" />
      {/* bottom section - subnav */}
      <ul className="hidden md:flex items-center h-full space-x-6 pl-4 py-2 text-s mb-0">
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
      </ul>
    </nav>
  );
}
