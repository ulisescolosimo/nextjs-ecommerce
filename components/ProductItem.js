import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/slides/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div class="w-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-5 my-5">
    <Link href={`/product/${product._id}`}>
        <img className="rounded-t-lg h-96" src={`${product.image}`} width={400} height={96} alt="product image" />
    </Link>
    <div class="px-5 pb-5 pt-2">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.product}</h5>
        </a>
        <a href="#">
            <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{product.brand}</h5>
        </a>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <button href="#" className="text-white mx-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add to cart</button>
        </div>
    </div>
</div>
  );
};

export default ProductItem;
