import React from "react";

export default function Docs({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug || [];

  if (slug.length === 1) {
    return <h1>Viewing Docs for feature {slug[0]}</h1>;
  } else if (slug.length === 2) {
    return (
      <h1>
        Viewing Docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }

  return <h1>Docs Home Page</h1>;
}
