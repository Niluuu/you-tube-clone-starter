import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
    id: string,
    title?: string,
    description?: string,
    watches?: number,
    created?: number
}

export default function VideoCard({id, title, description, watches, created }: VideoCardProps) {
  return (
    <Link href={`/watch/${id}`} key={id}>
      <div className="p-4 my-4 cursor-pointer">
        <div className="rounded-lg overflow-hidden">
          <video autoPlay muted width="340" height="160">
            <source src="/video.mp4" type="video/mp4" />
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
            <h1 className="font-bold text-lg">Title</h1>
            <p className="text-gray-400">Description of cannel</p>
            <p className="text-gray-400 ">455 watches • 4 day before</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
