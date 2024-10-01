import { Metadata } from "next";

type Props = {
  params: { productID: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = `Product ${params.productID}`;
  const description = `This is the product ${params.productID}`;
  return {
    title,
    description,
  };
}

export default function ProductDetails({ params }: Props) {
  return <h1>Details about Product {params.productID}</h1>;
}
