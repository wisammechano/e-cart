import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartWithBadge from "./ShoppingCartWithBadge";

export default function Navbar() {
  const searchRef = useRef(null);
  const onSearch = (e) => {
    e.preventDefault();
    alert(searchRef.current.value);
  };

  const cartCount = useSelector((state) => state.cart.count);

  return (
    <div className="w-full h-16 flex items-center px-2 md:px-1 py-1 justify-between bg-gray-100 shadow-sm sticky top-0 text-red-600 z-10">
      {/* Logo */}
      <div className="ml-8 text-lg font-bold hidden md:block text-black">
        <Link to="/">My Shop</Link>
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
        <Link to="/cart">
          <ShoppingCartWithBadge count={cartCount} />
        </Link>
      </div>

      {/* Navigation */}
      <div className="mr-8 hidden md:flex items-center font-semibold justify-center">
        <Link to="/" className="hover:text-red-500 hover:underline">
          Home
        </Link>
        <div className="w-px h-5 bg-red-300 mx-5" />
        <Link to="/cart" className="hover:text-red-500 hover:underline flex">
          <ShoppingCartWithBadge count={cartCount} />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}
