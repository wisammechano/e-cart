export default function Cart(props) {
  return (
    <div className="mx-auto mt-4 md:mt-10 flex flex-wrap md:flex-nowrap md:flex-row-reverse justify-center px-2 lg:px-12 xl:px-24">
      <div className="w-full md:w-2/6 md:ml-16">
        <div className="md:sticky top-16 py-2 bg-white">
          <div className="bg-red-300 rounded-lg px-3 py-3 text-red-800">
            <h2 className="text-2xl font-semibold mb-3">Cart Summary</h2>
            <div className="font-sm flex justify-between px-5 border-b-2 py-3 border-red-200">
              <div>
                <p className="mb-1">3 Items</p>
                <p className="mb-1">Shipping</p>
                <p className="mt-3 font-semibold">Discount</p>
              </div>
              <div className="text-right font-semibold">
                <p className="mb-1">$98.24</p>
                <p className="mb-1">Free</p>
                <p className="mt-3">- $40</p>
              </div>
            </div>
            <div className="font-bold text-3xl px-5 mt-3 flex justify-between items-center">
              <p className="text-xl font-semibold">Total</p>
              <p>$90</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-4/6">
        <div className="md:sticky top-16 py-2 bg-white">
          <div className="bg-white">
            <h2 className="text-2xl font-semibold py-3">Your Cart</h2>
          </div>
        </div>
        <div className="divide-y">
          {[1, 2, 3, 4, 5].map((i) => (
            <CartItem
              key={i}
              item={{
                id: 1,
                title: "Winter body",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
                price: 110,
                img: "https://github.com/AyaBellazreg/React-Shopping-Cart/blob/master/Shopping-Cart/src/images/item1.jpg?raw=true",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CartItem({ item }) {
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
          <div className="text-gray-600 font-bold font-base md:font-lg">
            <p>$119</p>
          </div>
          <button className="text-xs text-red-300">Remove Item</button>
        </div>
      </div>
      {/* Quantity Button */}
      <QuantitySpinner />
    </div>
  );
}

function QuantitySpinner() {
  const style = `
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;
  return (
    <>
      <div className="flex h-8 rounded-lg bg-transparent">
        <style>{style}</style>
        <button
          data-action="decrement"
          className="flex-shrink-0 bg-red-300 text-red-600 hover:text-red-500 hover:bg-red-400 h-full w-8 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="w-12 outline-none focus:outline-none text-center bg-red-100 font-bold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
        />
        <button
          data-action="increment"
          className="flex-shrink-0 bg-red-300 text-red-600 hover:text-red-500 hover:bg-red-400 h-full w-8 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </>
  );
}

function QuantitySpinner2() {
  return (
    <div className="flex flex-wrap">
      <div className="flex w-8/12">
        <input
          type="text"
          value="7"
          className="bg-white text-sm text-gray-900 text-center focus:outline-none border border-red-300 focus:border-red-500 rounded-l-md w-full"
        />
      </div>
      <div className="flex flex-col w-4/12">
        <button className="text-red-600 text-center text-md font-semibold rounded-tr-md px-1 bg-red-200 hover:bg-red-300 focus:outline-none border border-red-300 focus:border-red-500">
          +
        </button>
        <button className="text-red-600 text-center text-md font-semibold rounded-br-md px-1 bg-red-200 hover:bg-red-300 focus:outline-none border border-red-300 focus:border-red-500">
          -
        </button>
      </div>
    </div>
  );
}
