import Showcase from "../components/showcase";
import getProducts from "./api/data";

export default function Index({ products }) {
  return <Showcase productData={products} />;
}

export async function getStaticProps() {
  const productData = (await getProducts()) || [];
  return {
    props: { products: productData },
  };
}
