import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";



export const metadata: Metadata = {
  title: "Rasi Kitchen Equipment",
  description: "Explore our range of kitchen equipment designed for efficiency and style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
