"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import Stripe from "stripe";

type CartContextType = {
  cart: Stripe.Product[];
  setCart: (value: Stripe.Product[]) => void;
};
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Stripe.Product[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
