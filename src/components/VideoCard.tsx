import Image from "next/image";
import Link from "next/link";
import { VideoProps } from "./types";

export default function VideoCard({ video }: VideoProps) {
  const { id, videoUrl, title, watches, created, author } = video;

  return (
    <Link href={`/watch/${id}`} key={id}>
      <div className="p-4 my-4 cursor-pointer">
        <div className="rounded-lg overflow-hidden">
          <video muted width="100%" height="100%">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-row my-4 ">
          <div className="w-12 h-12 rounded-full overflow-hidden ">
            <Image
              src={author.profilePhoto}
              alt="Vercel Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="mx-4 w-4/5">
            <h1 className="font-bold text-lg ">{title}</h1>
            <p className="text-gray-400">Description of cannel</p>
            <p className="text-gray-400 ">
              {watches} watches • {created} day before
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
