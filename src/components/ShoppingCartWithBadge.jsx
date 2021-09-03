import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function ShoppingCartWithBadge({ count }) {
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
