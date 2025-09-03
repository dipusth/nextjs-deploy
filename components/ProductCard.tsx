"use client";
import Link from "next/link";
import Stripe from "stripe";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { CardProduct } from "./ui/Styles";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Stripe.Product;
  cardHeight: string;
}

export const ProductCard = ({ product, cardHeight }: Props) => {
  // const [products, setProducts] = useState<Stripe.Product[]>([]);
  // const [selectedProducts, setSelectedProducts] = useState<Stripe.Product[]>(
  //   []
  // );
  const price = product.default_price as Stripe.Price;
  const finalPrice = (price?.unit_amount ?? 0) / 100;
  // const oldprice = Number(finalPrice) - Number(finalPrice) * 0.2;

  const { cart, setCart } = useCart();

  const addToCart = () => {
    const newCart = [...cart];
    if (!newCart.find((item) => String(item.id) === String(product.id))) {
      newCart.push(product);
    }
    setCart(newCart);
    console.log("Added to cart newCart:", newCart);
  };

  return (
    <Card className="py-0 border-0 shadow-none rounded-lg gap-0">
      <Link href={`/products/${product.id}`}>
        {product.images && product.images[0] && (
          <CardProduct
            className={`${cardHeight} card-product w-full relative border overflow-hidden rounded-sm bg-slate-300`}
          >
            <Image
              className="opacity-[0.9]"
              src={product.images[0]}
              alt={product.name}
              title={product.name}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 w-full hover-content text-center justify-center flex">
              <div className="border rounded-sm flex max-w-[50%] bg-white text-gray-400 opacity-[0.8]">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Heart className="border-r p-2" size={35} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white tooltip">
                      Add to Whislist
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Eye className="p-2" size={35} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black text-white tooltip">
                      View Product
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardProduct>
        )}
        <CardHeader className="py-3 text-left px-0">
          <CardTitle className="justify-between flex">
            <span>{product.name}</span> <span>${finalPrice}</span>
          </CardTitle>
        </CardHeader>
      </Link>
      <CardFooter className="px-0">
        <Button
          type="button"
          variant={"outline"}
          className="p-2 border text-gray-500 rounded-3xl mb-3 cursor-pointer"
          onClick={addToCart} // Fixed: removed the direct function call
        >
          <ShoppingCart /> <span className="text-gray-500">Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
