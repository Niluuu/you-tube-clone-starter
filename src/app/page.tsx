"use client";
import { useState } from "react";
import SideBar from "../components/SideBar";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <main className="flex flex-row">
      <SideBar />

      <div className="grid grid-cols-4 ">
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
