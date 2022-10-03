import { Playlist } from 'components/fakePlaylist'
import { ListItem } from 'components/Views/List/listComponents/ListItem'

export const ListView = () => {
  return (
    <div className="pa-listWrapper mx-auto pb-8">
      {Playlist.map((nft) => {
        const { id, title, artist, curator, artCover } = nft
        return (
          <ListItem
            key={id}
            artist={artist}
            title={title}
            curator={curator}
            artCover={artCover}
          />
        )
      })}
    </div>
  )
}
