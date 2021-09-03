export default function CartSummary({ cart }) {
  return (
    <div className="bg-red-300 rounded-lg px-3 py-3 text-red-800">
      <h2 className="text-2xl font-semibold mb-3">Cart Summary</h2>
      <div className="font-sm flex justify-between px-5 border-b-2 py-3 border-red-200">
        <div>
          <p className="mb-1">{cart.count} Items</p>
          <p className="mb-1">Shipping</p>
          <p className="mt-3 font-semibold">
            Discount{" "}
            {cart.discountTotal > 0 && (
              <>({((cart.discountTotal / cart.total) * 100).toFixed(1)}%)</>
            )}
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
