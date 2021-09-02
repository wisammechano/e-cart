import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useRef } from "react";
export default function Navbar(props) {
  const searchRef = useRef(null);
  const onSearch = (e) => {
    e.preventDefault();
    alert(searchRef.current.value);
  };

  return (
    <div className="w-full h-16 flex items-center px-2 md:px-1 py-1 justify-between bg-gray-100 shadow-sm sticky top-0 text-red-600 z-10">
      {/* Logo */}
      <div className="ml-8 text-lg font-bold hidden md:block text-black">
        My Shop
      </div>

      {/* Search Form */}
      <form
        onSubmit={onSearch}
        className="w-full md:w-1/3 h-10 bg-red-200 hover:bg-red-300 transition duration-200 cursor-pointer border border-red-300 text-sm rounded-full flex items-center"
      >
        <input
          ref={searchRef}
          type="search"
          placeholder="Search products"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none h-full"
        />
        <button
          type="submit"
          className="flex-shrink-0 w-5 h-5 my-2 ml-3 mr-5"
          style={{ flexBasis: 20 }}
        >
          <SearchIcon />
        </button>
      </form>

      {/* Mobile Navigation */}
      <div className="ml-4 md:hidden">
        <a href="/">
          <ShoppingCartWithBadge count="100" />
        </a>
      </div>

      {/* Navigation */}
      <div className="mr-8 hidden md:flex items-center font-semibold justify-center">
        <a href="/" className="hover:text-red-500 hover:underline">
          Home
        </a>
        <div className="w-px h-5 bg-red-300 mx-5" />
        <a href="/" className="hover:text-red-500 hover:underline flex">
          <ShoppingCartWithBadge count="100" />
          <span>Cart</span>
        </a>
      </div>
    </div>
  );
}

function ShoppingCartWithBadge({ count }) {
  return (
    <div className="flex items-center">
      <ShoppingCartIcon className="w-6" />
      <span
        className="-ml-2 mr-1 -mt-3 badge bg-red-700 rounded-full px-1 text-center object-right-top text-white"
        style={{ fontSize: "0.6rem" }}
      >
        {count}
      </span>
    </div>
  );
}
