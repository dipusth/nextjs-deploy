import { ProductList } from "@/components/ProductList";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return (
    <div className="container text-center pt-10">
      <h1 className="font-bold text-2xl pb-5">All Products</h1>
      <ProductList products={products.data} />
    </div>
  );
}
