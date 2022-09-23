import { Playlist } from '../../fakePlaylist'
import { GridCard } from './gridComponents/GridCard'

export const GridView = () => {
  return (
    <div className="mx-auto pb-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {Playlist.map((nft) => {
          const { id, title, artist, curator, artCover, duration } = nft
          return (
            <GridCard
              key={id}
              artist={artist}
              title={title}
              curator={curator}
              artCover={artCover}
              duration={duration}
            />
          )
        })}
      </div>
    </div>
  )
}
