import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { addProduct } from "@/lib/store/features/cart/cartSlice";
import { getTruncateText } from "@/utils/getTruncateText";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductProps {
  product: Product;
  isAddedToCart: boolean;
  notify: (title: string) => void;
}

function ProductCard({ product, isAddedToCart, notify }: ProductProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addProduct({ product, qty: 1 }));
    notify(product.title);
  };

  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <div className="w-full sm:max-w-sm bg-white border border-gray-300 rounded-lg hover:shadow-md flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <Image
          width={250}
          height={250}
          className="h-[250px] p-8 rounded-t-lg"
          src={product.image}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-base sm:text-xl font-semibold tracking-tight text-gray-700">
            {getTruncateText(product.title, 50)}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900">
                {product.rating.rate}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline"
              >
                {product.rating.count} reviews
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold text-gray-700">
            ${product.price}
          </span>
          <button
            type="button"
            onClick={isAddedToCart ? handleGoToCart : handleAddToCart}
            className="border border-gray-300 text-black hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {isAddedToCart ? "Go to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
