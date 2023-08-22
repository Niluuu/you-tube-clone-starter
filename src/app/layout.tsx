import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="w-full">
        <Header />

        {children}
      </body>
    </html>
  );
}
