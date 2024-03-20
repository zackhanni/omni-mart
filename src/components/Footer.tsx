import Link from "next/link";

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
      { name: "other1", link: "/", icon: "" },
      { name: "other2" },
      { name: "other3" },
      { name: "other4" },
    ],
  };

  const contact = {
    address: "123 Main St, Philadelphia, PA",
    phone: "1-800-1234",
    email: "email@email.com",
  };

  return (
    <footer>
      <div className="flex flex-col items-center bg-purple-300 py-8 space-y-4">
        <p className="">We&apos;d love to year what you think!</p>
        <button className=" font-bold outline outline-1 rounded-full py-2 px-4 bg-white">
          Give feedback
        </button>
      </div>
      <div className="text-white py-4 space-y-4 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-4 max-w-screen-xl mx-auto">
          <div>Logo here</div>
          <div>
            <h3 className="font-bold">Featured</h3>
            {footerLinks.featured.map((link) => {
              return (
                <Link key={link.name} href={link.link}>
                  <p className="hover:underline">{link.name}</p>
                </Link>
              );
            })}
          </div>

          <div>
            <h3 className="font-bold">Contact us</h3>
            <p>Address</p>
            <p>{contact.address}</p>
            <p>Phone</p>
            <p>{contact.phone}</p>
            <p>Email</p>
            <p>{contact.email}</p>
          </div>

          <div>
            <h3 className="font-bold">Instagram</h3>
            {footerLinks.socials.map((link) => {
              return (
                <div key={link.name}>
                  <p>{link.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center py-4">All social media icons here</div>
        <p className="text-center text-xs">
          2024 OmniMart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
