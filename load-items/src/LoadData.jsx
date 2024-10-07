import { useEffect, useState } from "react";
import Item from "./Item";

const LoadData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const json = await data.json();
      setProducts((prev) => [...prev, ...json.products]); //i want previous as well as current products

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  return loading ? (
    <div className="flex items-center justify-center mt-32 font-extrabold text-3xl ">
      Loading the data.....
    </div>
  ) : (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="mt-5 flex flex-wrap w-full h-full gap-10 items-center justify-center">
        {products &&
          products.map((product) => <Item key={product.id} data={product} />)}
      </div>

      <button
        className="my-5 p-4 rounded-xl bg-black text-white font-bold cursor-pointer"
        onClick={() => setCount(count + 1)}
        disabled={disableBtn}
      >
        Load More Products
      </button>

      {disableBtn ? (
        <p className="mt-5 font-bold">
          You are loaded 100 items...please reload
        </p>
      ) : null}
    </div>
  );
};

export default LoadData;
