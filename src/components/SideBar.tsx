"use client";

import { useAppContext } from "@/contexts/appContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    routePath: "/",
    routeName: "Home",
    iconScr: "/home.png",
  },
  {
    routePath: "/watch",
    routeName: "Subscribed",
    iconScr: "/subscribed.png",
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const { sidebarOpen } = useAppContext();

  return (
    <div
      className={`scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 p-4 overflow-hidden ${
        sidebarOpen ? "w-96" : "w-18"
      }`}
    >
      {routes.map(({ routeName, routePath, iconScr }) => (
        <Link href={routePath} key={routePath}>
          <div
            className={`${
              sidebarOpen ? "flex flex-row" : "block w-12 h-14 "
            } items-center hover:bg-gray-300 rounded-md cursor-pointer`}
          >
            <Image
              src={iconScr}
              className="z-20 m-1.5 "
              alt="Vercel Logo"
              width={30}
              height={30}
              priority
            />
            <p
              className={` ${
                pathname === routePath ? "font-bold" : "font-normal"
              } ${sidebarOpen ? "text-md" : "text-xs truncate overflow-hidden"}`}
            >
              {routeName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
