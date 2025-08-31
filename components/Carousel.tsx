"use client";
import Stripe from "stripe";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  products: Stripe.Product[];
}
export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (products.length === 0) return prev;
        return (prev + 1) % products.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);
  const currentProduct = products[current];

  return (
    <Card className="relative h-[350px] py-0 border-0 shadow-none rounded-lg">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="flex-1 w-full ">
          <Link href="/products">
            <Image
              className=" overflow-hidden rounded-lg"
              src={currentProduct.images[0]}
              alt={currentProduct.name}
              title={currentProduct.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
      )}
    </Card>
  );
};
