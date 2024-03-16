export default function Nav() {
  return (
    <nav className="flex flex-col fixed top-0 left-0 bg-white/50 w-full">
      <div className="flex flex-row mx-auto space-x-4 items-center h-[88px] font-bold">
        <p>OmniMart</p>
        <p className="bg-blue-600 p-4 rounded-full">Departments</p>
        <p>Services</p>
        <form>
          <input></input>
          <button>Search</button>
        </form>
        <p>My Items</p>
        <p>
          Account <span className="font-normal">Sign In</span>
        </p>
        <p>Card</p>
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
