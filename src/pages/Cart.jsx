import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cart/cartSlice";
import CartSummary from "../components/CartSummary";
import CartItem from "../components/CartItem";

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
