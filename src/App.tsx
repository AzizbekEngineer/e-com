import { useEffect, useState } from "react";
import { getProducts } from "./api/products.requests";
// import { getProducts } from "./api/products";

const App = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.data.content); // dummyjson `products` massiv qaytarad
    } catch (error) {
      console.error("Mahsulotlarni olishda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;

  return (
    <div>
      <h1>Mahsulotlar</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
