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
      <div className="flex flex-row m-auto max-sm:flex-col max-lg:flex-col ">
        <div className="w-3/5 my-2 max-lg:w-4/5 m-auto ma">
          <h1 className="font-bold text-lg  my-4">{video.title}</h1>

          <div className="w-full flex items-start justify-between max-md:flex-col  max-sm:flex-col max-sm:pt-2 ">
            <div className="flex flex-row w-max max-sm:mb-4">
              <div className="w-max h-18 rounded-full overflow-hidden">
                <Image
                  src={video.author.profilePhoto}
                  alt="Vercel Logo"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className="mx-2 w-4/5">
                <h1 className="font-bold w-max">{video.author.profileName}</h1>
                <p className="text-gray-500 text-sm">
                  {video.author.subscibers} number subscribe
                </p>
              </div>

              <button className="h-10 flex w-max flex-row items-center bg-stone-200 rounded-full px-4 hover:bg-stone-300">
                <span className="font-bold">Subscribe</span>
              </button>
            </div>

            <div className="felx items-center">
              <div className="flex items-center px-2 cursor-pointer">
                <div className="h-10 flex items-center rounded-tl-full rounded-bl-full bg-stone-200 hover:bg-stone-300 px-3 w-max">
                  <Image
                    className="rotate-180"
                    src="/thumb.png"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                  <span className="font-bold ml-2 ">{video.watches} mln</span>
                </div>
                <div className="h-10 flex items-center bg-stone-200 rounded-tr-full rounded-br-full hover:bg-stone-300 px-3 w-max">
                  <Image
                    src="/thumb.png"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                </div>

                <button className="h-10 flex flex-row items-center bg-stone-200 rounded-full px-4 hover:bg-stone-300 mx-4 w-max">
                  <Image
                    src="/share.jpg"
                    alt="icon"
                    width={25}
                    height={25}
                    priority
                  />
                  <span className="w-full font-bold ml-2">Share</span>
                </button>
                <button className="h-10 flex flex-row items-center bg-stone-200 rounded-full px-2 hover:bg-stone-300 w-max">
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

          {/* Comments */}
          {video.comments.map(({ email, picture, date, comment }) => (
            <div key={email} className="flex my-4">
              <div className="w-18 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={picture}
                  alt="Vercel Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="w-10/12">
                <div className="flex my-2">
                  <p className="font-bold w-max">{email}</p>
                  <p className="text-gray-300 mx-4">
                    {date} day of writen before
                  </p>
                </div>
                <p>{comment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More video */}
        <div className="w-4/12 max-sm:w-full max-lg:w-2/3 m-auto">
          {videosData.map((video: VideoCardProps) => (
            <VideoCard video={video} key={video.videoUrl} />
          ))}
        </div>
      </div>
    </>
  );
}
