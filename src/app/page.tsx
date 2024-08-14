"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skeleton from "@/components/loading/Skeleton";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-4 px-8 py-6">
        {
          loading ?
          [1,2,3,4,5,6].map((_, index) => {
            return <Skeleton key={index} />
          }) :
          products.map((product, index) => {
            return <ProductCard key={index} product={product} />
          })
        }
      </div>
      <Footer />
    </>
  );
}
