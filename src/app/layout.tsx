import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial",
    template: "%s | Bug Finderr",
  },
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="py-10">
          <p className="bg-gray-200">Header</p>
        </header>
        {children}
        <footer className="py-10">
          <p className="bg-gray-200">Footer</p>
        </footer>
      </body>
    </html>
  );
}
