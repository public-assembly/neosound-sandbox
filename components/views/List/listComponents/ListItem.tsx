import Image from 'next/image'

interface ListItemProps {
  title: string
  artist: string
  curator: string
  artCover: string
  duration: string
}

export const ListItem = ({
  title,
  artist,
  curator,
  artCover,
  duration,
}: ListItemProps) => {
  return (
    <div className="text-white mb-4  overflow-hidden flex items-center justify-between gap-4 border border-white rounded-xl backdrop-blur-[50px]">
      <div className="flex gap-4">
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
        <div className="flex flex-col justify-between items-start py-2">
          <span>
            Curated by: {curator} / {duration}
          </span>
          <span className="text-2xl">{title}</span>
          <span className="text-lg">{artist}</span>
        </div>
      </div>
      <div className="flex flex-col border-l border-white ">
        <button className=" flex h-full items-center justify-center px-8 py-5  border-b border-white">
          Mint
        </button>
        <button className=" flex  items-center justify-center px-8 py-5 ">
          See detials
        </button>
      </div>
    </div>
  )
}
