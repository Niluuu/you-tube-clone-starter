"use client";

import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <main className="flex flex-row">
      <SideBar />

      <div className="grid xxl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-2 ">
        <VideoCard id="2322435" />
        <VideoCard id="2322435" />
        <VideoCard id="2322435" />
        <VideoCard id="2322435" />
        <VideoCard id="2322435" />
        <VideoCard id="2322435" />
      </div>
    </main>
  );
}
