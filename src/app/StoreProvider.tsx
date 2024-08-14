"use client";

import { addProduct, loadProducts } from "@/lib/store/features/cart/cartSlice";
import { AppStore, createStore } from "@/lib/store/store";
import React, { ReactNode, useEffect, useRef } from "react";
import { Provider } from "react-redux";

function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  useEffect(() => {
      storeRef.current!.dispatch(loadProducts());
  }, []);

  return <Provider store={storeRef.current!}>{children}</Provider>;
}

export default StoreProvider;
