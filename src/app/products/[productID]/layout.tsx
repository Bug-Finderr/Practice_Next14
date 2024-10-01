export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Featured Products</h1>
      {children}
    </div>
  );
}
