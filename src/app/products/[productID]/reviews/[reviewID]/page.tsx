import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productID: string; reviewID: string };
}) {
  if (parseInt(params.reviewID) > 100) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewID} for Product {params.productID}
    </h1>
  );
}
