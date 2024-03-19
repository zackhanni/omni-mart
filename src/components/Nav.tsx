export default function Nav() {
  const navMenuItems = [
    { name: "Departments", link: "/" },
    { name: "services", link: "/" },
    { name: "Departments", link: "/" },
  ];

  return (
    <nav className="flex flex-col fixed top-0 left-0 bg-purple-600 w-full text-white">
      <div className="flex flex-row justify-center space-x-4 items-center h-[88px] font-bold w-full">
        <p>OmniMart</p>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          Departments
        </p>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          Services
        </p>
        <form className="min-w-[70%] lg:min-w-fit flex">
          <input
            className="rounded-full px-8 font-normal w-full"
            placeholder="Search OmniMart"
          ></input>
          <button>Search icon</button>
        </form>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          My Items
        </p>
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          Account <span className="font-normal">Sign In</span>
        </p>
        <div className="hover:bg-purple-800 p-4 rounded-full flex flex-col">
          Cart icon<p className="text-xs font-normal">$0.00</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-evenly items-center py-2 text-sm">
        <p>Philadelphia, 19148 - Milkyway Supercenter</p>
        <p className="hidden sm:block">Deals</p>
        <p className="hidden lg:block">Grocery</p>
        <p className="hidden md:block">Essentials</p>
        <p className="hidden lg:block">Fashion</p>
        <p className="hidden md:block">Ship</p>
        <p className="hidden lg:block">Electronics</p>
      </div>
    </nav>
  );
}
