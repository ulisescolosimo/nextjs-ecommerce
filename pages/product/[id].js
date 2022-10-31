import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { MdBattery20 } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../../utils/slides/cartSlice";

const ProductDetail = () => {
  const { query } = useRouter();

  const [product, setProduct] = useState();

  const cart = useSelector((state) => state.cart.cart);

  console.log(cart);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.data.find((item) => item._id === query.id));
      });
  }, [cart]);

  const dispatch = useDispatch();

  if (!product) {
    return (
      <Layout>
        <div className="flex justify-center items-center mx-auto text-2xl font-bold h-[]">
        <div class="text-center">
    <div role="status">
        <svg class="inline mr-2 w-8 h-8 text-blue-600 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={product?.name}>
      <div className="my-10">
        <div className="py-5">
          <Link
            href={"/products"}
            className="text-white mx-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Back to products
          </Link>
        </div>
        <div className="flex md:gap-5 flex-wrap gap-10 mx-5 justify-center items-center">
          <div className="md:col-span-2">
            <img
              className="rounded-lg shadow-lg"
              src={product?.image}
              alt={product.name}
              width={450}
              height={450}
              layout="responsive"
            />
          </div>
          <div className="card bg-gray-200 text-black p-5 shadow-md rounded-lg border my-auto mt-0">
            <div className="mb-2 flex justify-between gap-10 ">
              <div className="font-medium">Brand</div>
              <div className="font-medium">{product.brand}</div>
            </div>
            <div className="mb-2 flex justify-between gap-10">
              <div className="font-medium">Name</div>
              <div className="font-medium">{product.product}</div>
            </div>
            <div className="mb-2 flex justify-between gap-10">
              <div className="font-medium">Price</div>
              <div className="font-medium">${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between gap-10">
              <div className="font-medium">Status</div>
              <div className="font-medium">
                {product.stock > 5 ? (
                  "In stock"
                ) : (
                  <div className="flex">
                    {product.stock} <MdBattery20 size={20} />
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-10">
              <label className="font-medium">Description</label>
              <label className="font-medium text-right">
                {product.description}
              </label>
            </div>
            <div className="flex items-center justify-center w-full mt-4 rounded-lg p-2">
              <div>
                {product.stock > 0 ? (
                  <button
                    className="text-white mx-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <p>No more stock</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
