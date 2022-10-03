import { Playlist } from 'components/fakePlaylist'
import { ListItem } from './listComponents/ListItem'

interface ListViewProps {
  openConnectWalletModal: boolean
  setOpenConnectWalletModal: (value: boolean) => void
  address: string | undefined
}
export const ListView = ({
  openConnectWalletModal,
  setOpenConnectWalletModal,
  address,
}: ListViewProps) => {
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
            openConnectWalletModal={openConnectWalletModal}
            setOpenConnectWalletModal={setOpenConnectWalletModal}
            address={address}
          />
        )
      })}
    </div>
  )
}
