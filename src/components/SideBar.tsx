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
    <>
      {/* MobileSidebar */}
      <div
        className={`max-sm:block lg:hidden md:hidden max-md:hidden ${
          sidebarOpen
            ? "max-sm:hidden max-md:hidden"
            : "max-sm:block max-md:block"
        }
        `}
      >
        <div className="h-screen w-2/4 absolute z-20 bg-white p-1">
          {routes.map(({ routeName, routePath, iconScr }) => (
            <Link href={routePath} key={routePath} onClick={toggleSidebar}>
              <div className="flex flex-row items-center">
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
        <div
          onClick={toggleSidebar}
          className="h-screen absolute z-20 bg-bgShadow opacity-2 w-2/4 right-0"
        />
      </div>

      {/* DescktopSidebar */}
      <div
        className={`scrollbar-thumb-gray-900 scrollbar-track-gray-100 p-4 first-letter h-screen max-sm:hidden max-md:hidden lg:block ${
          sidebarOpen ? "w-1/3" : "w-18"
        }
        `}
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
    </>
  );
}
