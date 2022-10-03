import { Playlist } from '../../fakePlaylist'
import { GridCard } from './gridComponents/GridCard'

interface GridViewProps {
  openDetailsModal: boolean
  setOpenDetailsModal: (value: boolean) => void
  openConnectWalletModal: boolean
  setOpenConnectWalletModal: (value: boolean) => void
  address: string | undefined
}

export const GridView = ({
  openDetailsModal,
  setOpenDetailsModal,
  openConnectWalletModal,
  setOpenConnectWalletModal,
  address,
}: GridViewProps) => {
  return (
    <div className="mx-auto pb-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {Playlist.map((nft) => {
          const { id, title, artist, curator, artCover } = nft
          return (
            <GridCard
              key={id}
              artist={artist}
              title={title}
              curator={curator}
              artCover={artCover}
              openDetailsModal={openDetailsModal}
              setOpenDetailsModal={setOpenDetailsModal}
              openConnectWalletModal={openConnectWalletModal}
              setOpenConnectWalletModal={setOpenConnectWalletModal}
              address={address}
            />
          )
        })}
      </div>
    </div>
  )
}
