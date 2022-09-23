import { Playlist } from 'components/fakePlaylist'
import { ListItem } from './listComponents/ListItem'

export const ListView = () => {
  return (
    <div className="mx-auto pb-8">
      {Playlist.map((nft) => {
        const { id, title, artist, curator, artCover, duration } = nft
        return (
          <ListItem
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
  )
}
