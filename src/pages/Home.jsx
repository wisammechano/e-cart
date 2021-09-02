import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Home(props) {
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.loading);

  return (
    <div className="p-3 w-full flex justify-center flex-wrap">
      {!isLoading &&
        products.map((p) => (
          <ProductCard onFabClick={() => {}} product={p} key={p.id} />
        ))}
      {isLoading && <p className="mt-20">Loading data...</p>}
    </div>
  );
}
