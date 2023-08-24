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
    routePath: "/subscribed",
    routeName: "Subscribed",
    iconScr: "/subscribed.png",
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useAppContext();

  return (
    <div
      className={`scrollbar-thumb-gray-900 scrollbar-track-gray-100 p-4 first-letter h-screen ${
        sidebarOpen ? "w-1/3" : "w-18"
      }`}
    >
      <div className={`xl:hidden xxl:hidden lg:hidden md:hidden sm:block `}>
        <Link
          onClick={toggleSidebar}
          href="/"
          className={`items-center ${
            sidebarOpen ? "flex" : "block"
          }`}
        >
          <div className="w-14 cursor-pointer ">
            <Image
              src="/white-logo.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </div>
          <p className="w-max font-bold pb-0.5 tracking-tight cursor-pointer">
            You tube
          </p>
        </Link>
      </div>

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
              } ${
                sidebarOpen ? "text-md" : "text-xs truncate overflow-hidden"
              }`}
            >
              {routeName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
