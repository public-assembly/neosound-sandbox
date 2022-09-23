import Image from 'next/image'

interface GridCardProps {
  title: string
  artist: string
  curator: string
  artCover: string
  duration: string
}

export const GridCard = ({
  title,
  artist,
  curator,
  artCover,
  duration,
}: GridCardProps) => {
  return (
    <div className="rounded-xl aspect-square w-full flex flex-col justify-between border border-pink-400 backdrop-blur-[50px]">
      <div className="p-4 text-white">
        <div className="flex flex-col justify-start">
          <div className="w-32 h-32">
            <Image
              src={artCover}
              alt={`${title} album cover`}
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
          <span className="text-sm mt-2">Curated by: {curator}</span>
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-2xl">{title}</span>
          <span className="text-lg">{artist}</span>
          <span className="text-md font-mono">{duration}</span>
        </div>
      </div>
      <div className="font-semibold flex items-center max-h-[20%]  w-full justify-between border-t border-pink-400 ">
        <button className="text-pink-400 border-r border-pink-400 flex w-full items-center justify-center px-6 py-3 ">
          Mint
        </button>
        <button className="text-pink-400 flex w-full items-center justify-center px-6 py-3 ">
          See detials
        </button>
      </div>
    </div>
  )
}
