"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/contexts/appContext";

export default function Header() {
  const [search, setSearch] = useState("");
  const { toggleSidebar } = useAppContext();

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted with value:", search);
  };

  return (
    <nav className="flex flex-row h-fit py-0.5 px-4 max-sm:justify-between max-md:justify-between">
      <div className="flex flex-row w-22 items-center justify-center">
        <div
          className="flex relative w-10 rounded-full cursor-pointer duration-75 hover:before:bg-slate-100 before:content-[''] before:absolute before:inset-0 before:w-10 before:h-10 before:z-10 before:rounded-full"
          onClick={toggleSidebar}
        >
          <Image
            src="/bar.png"
            className="z-20 m-1.5 "
            alt="Vercel Logo"
            width={30}
            height={30}
            priority
          />
        </div>
        <Link href="/" className="flex flex-row items-center">
          <div className="w-14 ml-2 cursor-pointer ">
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
      <div className="flex flex-row flex-1 items-center justify-center max-sm:hidden max-md:hidden">
        <form onSubmit={handleSubmit} className="flex relative px-2 w-3/5">
          <input
            type="text"
            className="w-11/12 p-2 border border-gray-300 rounded outline-0 focus:outline focus:outline-1 focus:outline-blue-600 rounded-e-sm rounded-l-full "
            placeholder="Enter something"
            value={search}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="rounded-r-full border border-gray-300 w-16 bg-slate-100"
          >
            <Image
              src="/search.png"
              className="m-1.5"
              alt="search"
              width={25}
              height={25}
              priority
            />
          </button>
        </form>
        <div className="flex relative w-10 rounded-full cursor-pointer duration-75 bg-slate-100  hover:before:bg-gray-300 before:content-[''] before:absolute before:inset-0 before:w-10 before:h-10 before:z-10 before:rounded-full">
          <Image
            src="/mic.png"
            className="z-20 m-1.5"
            alt="Vercel Logo"
            width={25}
            height={25}
            priority
          />
        </div>
      </div>
      <div className="flex flex-row items-center w-15">
        <div className="flex relative w-10 rounded-full cursor-pointer duration-75 bg-slate-100  hover:before:bg-gray-300 before:content-[''] before:absolute before:inset-0 before:w-10 before:h-10 before:z-10 before:rounded-full mx-2">
          <Image
            src="/camera.png"
            className="z-20 m-1.5 "
            alt="Vercel Logo"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="flex relative w-10 rounded-full cursor-pointer duration-75 bg-slate-100  hover:before:bg-gray-300 before:content-[''] before:absolute before:inset-0 before:w-10 before:h-10 before:z-10 before:rounded-full">
          <Image
            src="/bell.png"
            className="z-20 m-1.5 "
            alt="Vercel Logo"
            width={25}
            height={25}
            priority
          />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden ml-2 cursor-pointer">
          <Image
            src="/ava.jpg"
            alt="Vercel Logo"
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
    </nav>
  );
}
