"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartProduct } from "@/interfaces/product";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { removeAllProducts } from "@/lib/store/features/cart/cartSlice";
import { toast, ToastContainer } from "react-toastify";

enum CouponCode {
  YNOT10 = "YNOT10",
  YNOT10DOLLAR = "YNOT10DOLLAR",
}

interface OrderSummary {
  originalTotalPrice: number;
  totalPrice: number;
}

function OrderDetails() {
  const [originalTotalPrice, setOriginalTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discounts, setDiscounts] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const cartProducts = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleCheckout = () => {
    dispatch(removeAllProducts());
    router.push("/checkout");
  };

  const handleApplyCode = (e: FormEvent) => {
    e.preventDefault();


    let discountedPrice: number | null = 0;

    if (couponCode === CouponCode.YNOT10) {
      discountedPrice = originalTotalPrice * 0.1;
    } else if (couponCode === CouponCode.YNOT10DOLLAR) {
      discountedPrice = 10;
    }

    if (!discountedPrice) {
      toast.error("Invalid coupon code. (Try YNOT10 / YNOT10DOLLAR)");
      return;
    }

    setTotalPrice(originalTotalPrice - discountedPrice);
    setDiscounts(discountedPrice);
    toast.success("Coupon code Applied!")
  };

  const handleOrderSummary = () => {
    const orderSummary = cartProducts.reduce(
      (acc: OrderSummary, cartProduct: CartProduct) => {
        acc.originalTotalPrice += cartProduct.product.price * cartProduct.qty;
        acc.totalPrice = acc.originalTotalPrice;
        return acc;
      },
      {
        originalTotalPrice: 0,
        totalPrice: 0,
      }
    );
    setOriginalTotalPrice(orderSummary.originalTotalPrice);
    setTotalPrice(orderSummary.totalPrice);
  };

  useEffect(() => {
    handleOrderSummary();
  }, [cartProducts]);

  return (
    <div className="mx-auto mt-6 flex-1 space-y-6 lg:mt-0">
      <ToastContainer />
      {cartProducts.length > 0 && (
        <div className="space-y-4 rounded-lg text-black border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <p className="text-xl font-semibold text-gray-900">Order summary</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-2">
                <dt className="text-base font-normal text-gray-500">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${originalTotalPrice.toFixed(2)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-2">
                <dt className="text-base font-normal text-gray-500">
                  Delivery Fee
                </dt>
                <dd className="text-base font-medium text-gray-900">+$0</dd>
              </dl>

              <dl className="flex items-center justify-between gap-2">
                <dt className="text-base font-normal text-gray-500">
                  Discounts
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  -${discounts.toFixed(2)}
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-2 border-t border-gray-200 pt">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </dd>
            </dl>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="bg-blue-700 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800"
          >
            Proceed to Checkout
          </button>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500"> or </span>
            <a
              href="/"
              title=""
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
            >
              Continue Shopping
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      {cartProducts.length > 0 && (
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <form method="post" className="space-y-4" onSubmit={handleApplyCode}>
            <div>
              <label
                htmlFor="voucher"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                {" "}
                Do you have a coupon code?{" "}
              </label>
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                type="text"
                id="voucher"
                className="uppercase block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                placeholder=""
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Apply Code
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
