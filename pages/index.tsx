import Showcase from "../components/showcase";
import getProducts, { Product } from "./api/data";

export default function Index({ products }: { products: Product[] }) {
  return <Showcase productData={products} />;
}

export async function getStaticProps() {
  const productData: Product[] = (await getProducts()) || [];
  return {
    props: { products: productData },
  };
}
