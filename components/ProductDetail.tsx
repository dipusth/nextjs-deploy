import Image from "next/image";
import React from "react";
import Stripe from "stripe";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
  cardHeight: string;
}

const ProductDetail = ({ product, cardHeight }: Props) => {
  const price = product.default_price as Stripe.Price;
  const finalPrice = (price?.unit_amount ?? 0) / 100;
  return (
    <div className="flex py-5">
      <div
        className={`border cart-img ${cardHeight} relative flex-1 rounded-sm overflow-hidden`}
      >
        <Image
          className="opacity-[0.9] h-20"
          src={product.images[0]}
          alt={product.name}
          title={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="ml-15 flex-2">
        <h4 className="font-bold text-2xl">{product.name}</h4>
        <p>{product.description}</p>
        {price && price.unit_amount && (
          <p>
            <span className="font-bold">${finalPrice}</span>
          </p>
        )}

        <div className="my-2">
          <Button
            variant={"outline"}
            className="p-3 rounded-none active:bg-primary active:text-white hover:bg-primary hover:text-white"
          >
            -
          </Button>
          <span className="mx-3">0</span>
          <Button
            variant={"outline"}
            className="p-3 rounded-none active:bg-primary active:text-white hover:bg-primary hover:text-white"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
