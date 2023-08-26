import "./globals.css";
import Header from "../components/Header";
import { AppProvider } from "@/contexts/appContext";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.jpg" />
      </head>
      <body className="w-full">
        <AppProvider>
          <Header />

          <div className="flex">
            <SideBar />

            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
