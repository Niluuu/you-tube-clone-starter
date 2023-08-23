import Image from "next/image";
import Link from "next/link";

export interface VideoCardProps {
  id: string;
  title?: string;
  description?: string;
  watches?: number;
  created?: number;
  videoUrl: string;
}

export default function VideoCard({
  id,
  title,
  description,
  watches,
  created,
  videoUrl,
}: VideoCardProps) {
  return (
    <Link href={`/watch/${id}`} key={id}>
      <div className="p-4 my-4 cursor-pointer">
        <div className="rounded-lg overflow-hidden">
          <video autoPlay muted width="100%" height="300">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-row my-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ">
            <Image
              src="/ava.jpg"
              alt="Vercel Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="mx-4">
            <h1 className="font-bold text-lg">{title}</h1>
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
