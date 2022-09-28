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
              width={32}
              height={32}
            />
          </div>
        )}
      </div>
      <div className="pa-listItem__artist-title flex justify-between flex-col gap-1 sm:gap-0  sm:flex-row sm:items-center w-full px-2 sm:px-8">
        <span className="text-md sm:text-xl ">
          {artist} - {title}
        </span>
        <span className="pa-listItem__curator text-xs sm:text-sm uppercase font-thin ">
          Curated by: {curator}
        </span>
      </div>
    </div>
  )
}
