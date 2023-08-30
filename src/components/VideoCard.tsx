import Image from "next/image";
import Link from "next/link";
import { VideoProps } from "./types";

export default function VideoCard({ video }: VideoProps) {
  const { id, title, watches, created, author, videoImg } = video;

  return (
    <Link href={`/watch/${id}`} key={id}>
      <div className="p-4 my-4 cursor-pointer">
        <div className="w-full h-[250px] relative rounded-lg overflow-hidden">
          <Image
            src={videoImg}
            alt="Video image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-row my-4 ">
          <div className="w-12 h-12 rounded-full overflow-hidden ">
            <Image
              src={author.profilePhoto}
              alt="Profile photo"
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
