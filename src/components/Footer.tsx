import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRebel } from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faRocket,
  faSpaghettiMonsterFlying,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const footerLinks = {
    featured: [
      { name: "Deals", link: "/" },
      { name: "Grocery", link: "/" },
      { name: "Essentials", link: "/" },
      { name: "Fashion", link: "/" },
      { name: "Ship", link: "/" },
      { name: "Electronics", link: "/" },
    ],

    socials: [
      { name: "Rebel", link: "/", icon: faRebel },
      { name: "Ship", link: "/", icon: faRocket },
      { name: "Brain", link: "/", icon: faBrain },
      { name: "Spaghetti", link: "/", icon: faSpaghettiMonsterFlying },
    ],
  };

  const contact = {
    address: "Andromeda Galaxy",
    phone: "1-800-867-5309",
    email: "info@omnimart.com",
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-950 to-purple-700">
      <div className="flex flex-col items-center bg-purple-300 py-8 space-y-4 text-center">
        <p className="">We&apos;d love to year what you think!</p>
        <button className="font-bold outline outline-1 rounded-full py-2 px-4 bg-white">
          Give feedback
        </button>
      </div>
      <div className="container text-white">
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 py-8">
          {/* logo */}
          <div className="col">
            <Logo />
          </div>
          {/* featured */}
          <div className="col">
            <h3 className="font-bold">Featured</h3>
            <div className="flex flex-col">
              {footerLinks.featured.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.link}
                    className="text-white no-underline hover:underline	"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* address */}
          <div className="col">
            <h3 className="font-bold">Contact us</h3>
            <ul className="list-none">
              <li>{contact.address}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
          {/* instagram images */}
          <div className="col">
            <h3 className="font-bold">Instagram</h3>
            <div className="row row-cols-2 g-4">
              {footerLinks.socials.map((link) => {
                return (
                  <div key={link.name} className="">
                    <FontAwesomeIcon className="text-2xl" icon={link.icon} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* sub footer */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            {footerLinks.socials.map((social) => {
              return (
                <div key={social.name} className="">
                  <FontAwesomeIcon
                    className="text-4xl hover:text-orange-500"
                    icon={social.icon}
                  />
                </div>
              );
            })}
          </div>
          <p className=" text-center text-xs py-8">
            2024 OmniMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
