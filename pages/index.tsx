import Showcase from "../components/showcase";
import getProducts from "./api/data";
export interface Product {
  id: string;
  sku: string;
  price: string;
  name: string;
}
export default function Index({ products }: { products: Product[] }) {
  return <Showcase productData={products} />;
}

export async function getStaticProps() {
  const productData: Product[] = (await getProducts()) || [];
  return {
    props: { products: productData },
  };
}
