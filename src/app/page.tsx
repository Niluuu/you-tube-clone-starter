"use client";

import SideBar from "@/components/SideBar";
import VideoCard, { VideoCardProps } from "@/components/VideoCard";
import videosData from "@/mockData/videos.json";

export default function Home() {
  return (
    <main className="flex flex-row">
      <SideBar />

      <div className="grid xxl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:gird-cols-1">
        {videosData.map((video: VideoCardProps) => (
          <VideoCard id={video.id} key={video.title} title={video.title} description={video.description} watches={video.watches}  created={video.created} videoUrl={video.videoUrl}/>
        ))}
      </div>
    </main>
  );
}
