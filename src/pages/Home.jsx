import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { addItem } from "../features/cart/cartSlice";

export default function Home() {
  const { data, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="p-3 w-full flex justify-center flex-wrap">
      {!loading &&
        data.map((p) => (
          <ProductCard
            onFabClick={() => {
              dispatch(addItem({ item: p }));
            }}
            product={p}
            key={p.id}
          />
        ))}
      {loading && <p className="mt-20">Loading data...</p>}
    </div>
  );
}
