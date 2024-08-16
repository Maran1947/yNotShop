"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Skeleton from "@/components/loading/Skeleton";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/interfaces/product";
import { useAppSelector } from "@/lib/hooks/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const cartProducts = useAppSelector((state) => state.cart.products);

  const notify = (title: string) => toast.success(`${title} added to cart successfully.`, {
    autoClose: 2000,
    position: "bottom-right"
  })

  const fetchProducts = async () => {
    console.log('Fetching...')
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (err) {
      console.log("Error occurred in fetching products: ", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const checkIsAddedToCart = (productId: number) => {
    return cartProducts
      .map((cartProduct) => {
        return cartProduct.product.id;
      })
      .includes(productId);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8 py-6 min-h-screen">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((_, index) => {
              return <Skeleton key={index} allowHorizontal={false} allowImage={true} />;
            })
          : products.map((product: Product, index: number) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  isAddedToCart={checkIsAddedToCart(product.id)}
                  notify={notify}
                />
              );
            })}
      </div>
      <Footer />
    </>
  );
}
