"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import CartWrapper from "./Style";
import Image from "next/image";
import ProductDetail from "@/components/ProductDetail";

const Cart = () => {
  const { cart } = useCart();
  console.log("cart", cart);
  const hasCart = cart.length;
  return (
    <div className="container">
      <div className="flex gap-8">
        <div className="p-5 border rounded-lg flex-2">
          {!hasCart && (
            <div className="flex">
              Your cart is empty
              <Link href={"/register"}>Sign up NOW</Link>
            </div>
          )}

          {cart.map((item, key) => {
            return (
              <CartWrapper className="flex p-5 " key={key}>
                <ProductDetail product={item} cardHeight="h-50" />
              </CartWrapper>
            );
          })}
        </div>

        <div className="flex-1 border rounded-lg max-h-[300px]">
          <h3 className="border-b-1 p-5"> Price Details</h3>
          <div>
            <div className="flex p-5 justify-between">
              <span>Price ({hasCart} item)</span>
              <span> $1250</span>
            </div>
            <div className="flex p-5 justify-between">
              <span>
                <b>Total</b>
              </span>
              <span>
                <b> $1250</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
