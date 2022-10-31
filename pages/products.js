import { useEffect, useState, React } from "react";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.data));
  }, []);

  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filter = products.filter((item) => item.product.toLowerCase().includes(search))

  return (
    <Layout title="Home">
      <form className="mt-10">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={handleSearch}
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search products..."
              required
            />
          </div>
        </form>
      <div className="flex justify-center items-start flex-wrap my-10">
        {filter.length > 0 ? filter.map((product) => (
          <ProductItem key={product._id} product={product} />
        )) : products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
