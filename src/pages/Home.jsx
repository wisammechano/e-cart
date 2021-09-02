import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const url = "/data.json";
    const data = await fetch(url).then((r) => r.json());
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-3 w-full flex justify-center flex-wrap">
      {products.map((p) => (
        <ProductCard onFabClick={() => {}} product={p} key={p.id} />
      ))}
    </div>
  );
}
