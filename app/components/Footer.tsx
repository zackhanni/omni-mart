import Link from "next/link";
import Image from "next/image";
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

  const instagramImageLinks = [
    "/instagram-images/inst1.jpg",
    "/instagram-images/inst2.jpg",
    "/instagram-images/inst3.jpg",
    "/instagram-images/inst4.jpg",
    "/instagram-images/inst5.jpg",
    "/instagram-images/inst6.jpg",
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-950 to-purple-700 relative">
      <div className="bg-cover bg-fixed flex flex-col items-center space-y-4 text-center overflow-hidden h-40 bg-[url('/purple-wave.jpeg')]">
        <div className="z-10 py-8 bg-black/40 w-full h-full">
          <p className="text-white">We&apos;d love to hear what you think!</p>
          <button className="font-bold outline outline-1 rounded-full py-2 px-4 bg-white">
            Give feedback
          </button>
        </div>
      </div>

      {/* main footer section */}
      <div className="container pt-20 pb-16 text-white">
        <div className="row">
          {/* logo and info */}
          <div className="col-lg-5 mb-16 mb-lg-0">
            <div className="pb-2">
              <Logo className="w-full h-24" />
            </div>

            <p className="text-center max-w-xs mx-auto">
              We are a celestial emporium where the wonders of the universe come
              together for the ultimate shopping experience.
            </p>
            {/* <div className="flex space-x-4">
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
            </div> */}
            <p className="text-center">2024 OmniMart. All rights reserved.</p>
          </div>
          {/* featured */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h3 className="font-bold">Featured</h3>
            <ul className="flex flex-col list-unstyled space-y-2">
              {footerLinks.featured.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      className="text-white no-underline hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* contact us */}
          <div className="col-6 col-sm-4 col-lg-2">
            <h3 className="font-bold">Contact us</h3>
            <ul className="list-unstyled space-y-2">
              <li>{contact.address}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
          {/* instagram images */}
          <div className="col-sm-4 col-lg-3">
            <h3 className="font-bold text-center sm:text-start">Instagram</h3>
            <div className="grid grid-cols-3 gap-4 place-items-center">
              {instagramImageLinks.map((link) => {
                return (
                  <Image
                    key={link}
                    src={link}
                    width={82}
                    height={82}
                    alt={`Instagram picture ${link}`}
                    className="object-cover aspect-square max-size-24 hover:scale-105 duration-300 "
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
