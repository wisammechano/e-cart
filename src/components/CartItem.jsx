import QuantitySpinner from "./QuantitySpinner";

export default function CartItem({ item, onRemove, onQuantity }) {
  return (
    <div className="flex justify-between items-center py-2">
      {/* Image and Title */}
      <div className="flex items-center w-3/4">
        <img
          src={item.img}
          alt={item.title}
          className="w-16 h-16 md:w-24 md:h-24 overflow-hidden"
        />
        <div className="mx-3">
          <h3 className="text-base md:tex-lg text-black font-bold">
            {item.title}
          </h3>
          <div className="text-gray-600 font-bold font-base md:font-lg flex">
            <p className={item.hasDiscount ? "line-through mr-2" : ""}>
              ${item.price}
            </p>
            {item.hasDiscount && (
              <p className="text-red-600 font-extra-bold">
                ${item.discountPrice}
              </p>
            )}
          </div>
          <button className="text-xs text-red-300" onClick={onRemove}>
            Remove Item
          </button>
        </div>
      </div>
      {/* Quantity Button */}
      <QuantitySpinner onAddRemove={onQuantity} quantity={item.quantity} />
    </div>
  );
}
