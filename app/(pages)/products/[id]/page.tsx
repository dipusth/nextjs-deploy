// app/products/[id]/page.tsx
import { stripe } from "@/lib/stripe"; // adjust to your path
import ProductDetail from "@/components/ProductDetail";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  return <ProductDetail product={product} cardHeight="h-100" />;
};

export default ProductPage;
