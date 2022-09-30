import Image from 'next/image'
import { useState } from 'react'

interface ListItemProps {
  title: string
  artist: string
  curator: string
  artCover: string
}

export const ListItem = ({ title, artist, curator, artCover }: ListItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="pa-listItem text-neutral-300  mb-4 flex items-center justify-between  border border-neutral-600  backdrop-blur-[50px] shadow-lg shadow-neutral-700/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="aspect-square w-20 relative cursor-pointer">
        <Image
          src={artCover}
          alt={`${title} album cover`}
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
        />
        {isHovered && (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
            <Image
              src={'/neosound-icons/player/play/play-default.svg'}
              alt="Play"
              width={48}
              height={48}
              layout="fixed"
            />
          </div>
        )}
      </div>
      <div className="pa-listItem__artist-title flex justify-between flex-col gap-1 sm:gap-0  sm:flex-row sm:items-center w-full px-2 sm:px-8">
        <div className="flex items-center ">
          <span className="text-md sm:text-xl sm:mr-4 ">
            {artist} - {title}
          </span>
          {isHovered && (
            <button className="w-6 h-6 hidden sm:block">
              <Image
                src={'/neosound-icons/UI/moreDetails/moreDetails-default.svg'}
                alt="More details"
                layout="responsive"
                width={24}
                height={24}
                objectFit="cover"
              />
            </button>
          )}
        </div>
        <span className="pa-listItem__curator text-xs sm:text-sm uppercase font-thin ">
          Curated by: {curator}
        </span>
        {isHovered && (
          <button className="w-7 h-7 fixed  right-5 top-[50%] translate-y-[-50%]  sm:hidden">
            <Image
              src={'/neosound-icons/UI/moreDetails/moreDetails-default.svg'}
              alt="More details"
              layout="responsive"
              width={12}
              height={12}
              objectFit="cover"
            />
          </button>
        )}
      </div>
    </div>
  )
}
