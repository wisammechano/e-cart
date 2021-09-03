import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../features/cart/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto mt-4 md:mt-10 flex flex-wrap md:flex-nowrap md:flex-row-reverse justify-center px-2 lg:px-12 xl:px-24">
      <div className="w-full md:w-2/6 md:ml-16">
        <div className="md:sticky top-16 py-2 bg-white">
          <CartSummary cart={cart} />
        </div>
      </div>
      <div className="w-full md:w-4/6">
        <div className="md:sticky top-16 py-2 bg-white">
          <div className="bg-white">
            <h2 className="text-2xl font-semibold py-3">Your Cart</h2>
          </div>
        </div>
        <div className="divide-y">
          {cart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => dispatch(removeItem({ item }))}
              onQuantity={(amount) => {
                if (amount > 0) {
                  dispatch(addItem({ item, amount }));
                } else {
                  dispatch(removeItem({ item, amount }));
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartSummary({ cart }) {
  return (
    <div className="bg-red-300 rounded-lg px-3 py-3 text-red-800">
      <h2 className="text-2xl font-semibold mb-3">Cart Summary</h2>
      <div className="font-sm flex justify-between px-5 border-b-2 py-3 border-red-200">
        <div>
          <p className="mb-1">{cart.count} Items</p>
          <p className="mb-1">Shipping</p>
          <p className="mt-3 font-semibold">
            Discount ({((cart.discountTotal / cart.total) * 100).toFixed(1)}%)
          </p>
        </div>
        <div className="text-right font-semibold">
          <p className="mb-1">${cart.total.toLocaleString()}</p>
          <p className="mb-1">Free</p>
          <p className="mt-3">- ${cart.discountTotal.toLocaleString()}</p>
        </div>
      </div>
      <div className="font-bold text-3xl px-5 mt-3 flex justify-between items-center">
        <p className="text-xl font-semibold">Total</p>
        <p>${(cart.total - cart.discountTotal).toLocaleString()}</p>
      </div>
    </div>
  );
}

function CartItem({ item, onRemove, onQuantity }) {
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

function QuantitySpinner({ onAddRemove, quantity }) {
  const style = `
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;

  const onBlur = (e) => {
    let val = e.target.value;
    if (val === "") val = 0;
    const difference = val - quantity;
    onAddRemove(difference);
  };

  const [value, setValue] = useState(quantity);
  const onAdd = () => {
    setValue((v) => v + 1);
    onAddRemove(1);
  };

  const onRemove = () => {
    setValue((v) => v - 1);
    onAddRemove(-1);
  };

  return (
    <>
      <div className="flex h-8 rounded-lg bg-transparent">
        <style>{style}</style>
        <button
          data-action="remove"
          className="flex-shrink-0 bg-red-300 text-red-600 hover:text-red-500 hover:bg-red-400 h-full w-8 rounded-l cursor-pointer outline-none"
          onClick={onRemove}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="w-12 outline-none focus:outline-none text-center bg-red-100 font-bold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
        />
        <button
          data-action="add"
          className="flex-shrink-0 bg-red-300 text-red-600 hover:text-red-500 hover:bg-red-400 h-full w-8 rounded-r cursor-pointer"
          onClick={onAdd}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </>
  );
}
