import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import React from "react";

const layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <CartProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </CartProvider>
  );
};

export default layout;
