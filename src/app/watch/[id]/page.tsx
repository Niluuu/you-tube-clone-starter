"use client";

import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import videosData from "@/mockData/videos.json";
import { useEffect, useState } from "react";
import { VideoCardProps } from "@/components/types";

export default function Watch({ params }: { params: { id: string } }) {
  const [video, setVideo] = useState<VideoCardProps>();

  useEffect(() => {
    const foundVideo = videosData.find(
      (video: VideoCardProps) => video.id === params.id
    );
    
    setVideo(foundVideo);
  }, [params.id]);

  if (!video) {
    return null;
  }

  return (
    <>
      <div className="bg-black felx justify-center items-center ">
        <video
          autoPlay
          controls
          width="80%"
          height="10%"
          className="m-auto max-sm:w-full max-lg:w-full"
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-row max-sm:flex-col max-lg:flex-col mx-20">
        <div className="w-3/5  my-2 max-sm:w-full max-sm:mx-4 max-lg:w-4/5 max-lg:mx-8 ">
          <h1 className="font-bold text-lg w-max my-4">{video.title}</h1>
          <div className="flex flex-row items-start justify-between max-sm:flex-col max-sm:pt-2">
            <div className="flex flex-row">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/ava.jpg"
                  alt="Vercel Logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className="mx-2">
                <h1 className="font-bold">Title profile</h1>
                <p className="text-gray-500 text-sm"> 23 number subscribe</p>
              </div>

              <button className="h-10 flex flex-row items-center bg-stone-200 rounded-full px-4 hover:bg-stone-300">
                <span className="font-bold">Subscribe</span>
              </button>
            </div>
            <div className="felx items-center">
              <div className="flex items-center px-2 cursor-pointer">
                <div className="h-10 flex items-center rounded-tl-full rounded-bl-full bg-stone-200 hover:bg-stone-300 px-3">
                  <Image
                    className="rotate-180"
                    src="/thumb.png"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                  <span className="font-bold ml-2">{video.watches} mln</span>
                </div>
                <div className="h-10 flex items-center bg-stone-200 rounded-tr-full rounded-br-full hover:bg-stone-300 px-3">
                  <Image
                    src="/thumb.png"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                </div>

                <button className="h-10 flex flex-row items-center bg-stone-200 rounded-full px-4 hover:bg-stone-300 mx-4">
                  <Image
                    src="/share.jpg"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                  <span className="w-full font-bold ml-2">Share</span>
                </button>
                <button className="h-10 flex flex-row items-center bg-stone-200 rounded-full px-2 hover:bg-stone-300">
                  <Image
                    src="/dots.png"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12 max-sm:w-full max-lg:w-2/3 m-auto">
          {videosData.map((video: VideoCardProps) => (
            <VideoCard video={video} key={video.videoUrl} />
          ))}
        </div>
      </div>
    </>
  );
}
