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
            className="rounded-full px-8 py-4 font-normal w-full"
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
        <p className="hover:bg-purple-800 p-4 rounded-full hidden lg:block">
          Card
        </p>
      </div>
      <hr />
      <div className="flex flex-row justify-evenly items-center">
        <p>Philadelphia, 19148 - Milkyway Supercenter</p>
        <p>Deals</p>
        <p>Grocery</p>
        <p>Essentials</p>
        <p>Fashion</p>
        <p>Ship</p>
        <p>Electronics</p>
      </div>
    </nav>
  );
}
