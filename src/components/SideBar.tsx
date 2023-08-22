"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    routePath: "/",
    routeName: "Home",
    iconScr: "/bar.png",
  },
  {
    routePath: "/watch",
    routeName: "Potpiska",
    iconScr: "/bar.png",
  },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="w-96 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 p-4">
      {routes.map(({ routeName, routePath, iconScr }) => (
        <Link href={routePath} key={routePath}>
          <div className="flex flex-row items-center hover:bg-gray-300 rounded-md cursor-pointer">
            <Image
              src={iconScr}
              className="z-20 m-1.5 "
              alt="Vercel Logo"
              width={30}
              height={30}
              priority
            />
            <p className={pathname === routePath ? "font-bold" : "font-normal"}>
              {routeName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
