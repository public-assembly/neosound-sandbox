import ConnectWalletModal from 'components/Modals/ConnectWalletModal'
import DetailsModal from 'components/Modals/DetailsModal'
import Image from 'next/image'

interface GridCardProps {
  title: string
  artist: string
  curator: string
  artCover: string
  openDetailsModal: boolean
  setOpenDetailsModal: (value: boolean) => void
  openConnectWalletModal: boolean
  setOpenConnectWalletModal: (value: boolean) => void
  address: string | undefined
}

export const GridCard = ({
  title,
  artist,
  curator,
  artCover,
  openDetailsModal,
  setOpenDetailsModal,
  openConnectWalletModal,
  setOpenConnectWalletModal,
  address,
}: GridCardProps) => {
  return (
    <>
      <div className="aspect-square  shadow-lg shadow-neutral-200/10 relative">
        <div className="absolute inset-0">
          <Image
            src={artCover}
            alt={`${title} album cover`}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex flex-col justify-between bg-[rgba(0,0,0,0.4)] p-6 text-stone-300 font-semibold">
          <div>
            <span className="uppercase">
              Curated by: <span className="font-medium">{curator}</span>
            </span>
            <div className="pa-grid--card__title text-xl mt-6 font-medium">{title}</div>
            <div className="pa-grid--card__title text-lg font-thin mb-2">{artist}</div>
            <button onClick={() => setOpenDetailsModal(true)}>
              <Image
                src={'/neosound-icons/UI/moreDetails/moreDetails-default.svg'}
                alt="More details"
                layout="fixed"
                width={24}
                height={24}
                objectFit="cover"
              />
            </button>
          </div>
          <div className="flex w-full justify-end">
            <button>
              <Image
                src={'/neosound-icons/player/play/play-default.svg'}
                alt="Play"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      </div>
      {openDetailsModal && (
        <DetailsModal
          openDetailsModal={openDetailsModal}
          setOpenDetailsModal={setOpenDetailsModal}
          setOpenConnectWalletModal={setOpenConnectWalletModal}
        />
      )}
      {openConnectWalletModal && !address && (
        <ConnectWalletModal
          openConnectWalletModal={openConnectWalletModal}
          setOpenConnectWalletModal={setOpenConnectWalletModal}
          caption="to mint your NFT"
        />
      )}
    </>
  )
}
