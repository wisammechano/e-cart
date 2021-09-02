export default function ProductCard({ product, onFabClick }) {
  return (
    <div className="w-96 bg-white m-4 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl duration-500 transition">
      <img
        src={product.img}
        alt={product.title}
        className="border-b border-gray-200"
      />
      <div className="flex justify-end -mt-8 px-4 w-full">
        <Fab onClick={onFabClick} />
      </div>
      <div className="px-5 pb-5 relative">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-lg font-semibold text-gray-600">
          ${product.price}
        </p>
        <p className="mt-1 text-gray-500">{product.desc}</p>
      </div>
    </div>
  );
}

function Fab(props) {
  return (
    <button
      {...props}
      className="p-0 w-16 h-16 bg-red-600 rounded-full hover:bg-red-700 shadow-lg mouse transition ease-in duration-200 focus:outline-none hover:shadow-2xl"
    >
      <svg
        viewBox="0 0 20 20"
        enableBackground="new 0 0 20 20"
        className="w-6 h-6 inline-block"
      >
        <path
          fill="#FFFFFF"
          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                        C15.952,9,16,9.447,16,10z"
        />
      </svg>
    </button>
  );
}
