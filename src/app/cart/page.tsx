'use client'

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import CartProducts from "./components/CartProducts";
import OrderDetails from "./components/OrderDetails";

function page() {
  return (
    <>
      <Header />
      <section className="bg-white px-2 py-3 md:py-12">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-xl font-semibol sm:text-2xl">Shopping Cart</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <CartProducts />
            <OrderDetails />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
