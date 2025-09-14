"use client";

import Stripe from "stripe";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchterm] = useState<string>("");

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLocaleLowerCase();
    const nameMatch = product.name.toLocaleLowerCase().includes(term);
    const descroptionMatch = product?.description
      ? product.description.toLocaleLowerCase().includes(term)
      : false;
    return nameMatch || descroptionMatch;
  });

  return (
    <div className="mt-5">
      <div className="flex items-center max-w-3xs border px-3 rounded-sm search-wrapper mb-5">
        <Search />
        <Input
          className="border-0 shadow-none"
          value={searchTerm}
          type="text"
          onChange={(e) => setSearchterm(e.target.value)}
          placeholder="Search products..."
        />
      </div>
      <ul className="md:flex flex-wrap gap-3 justify-between">
        {filteredProduct.map((product, key) => {
          return (
            <li
              key={key}
              className="relative md:w-[30%] lg:w-[23%] rounded-sm mb-5 pb-5"
            >
              <ProductCard product={product} cardHeight="h-70" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
