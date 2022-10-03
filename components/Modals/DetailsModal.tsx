import { Dialog, Transition } from '@headlessui/react'
import { Playlist } from '../fakePlaylist'
import { Fragment } from 'react'
import Image from 'next/image'
import { useAuth } from 'hooks/useAuth'
import { shortenAddress } from 'utils'
import MintForm from 'components/Forms/MintForm'

interface DetailsModalProps {
  setOpenDetailsModal(value: boolean): void
  openDetailsModal: boolean
  setOpenConnectWalletModal(value: boolean): void
}

const DetailsModal = ({
  openDetailsModal,
  setOpenDetailsModal,
  setOpenConnectWalletModal,
}: DetailsModalProps) => {
  const { address, ensAvatar, ensName } = useAuth()

  const handleMint = () => {
    if (!address) {
      setOpenDetailsModal(false)
      setOpenConnectWalletModal(true)
      return
    }
    console.log('minting')
  }

  return (
    <Transition appear show={openDetailsModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setOpenDetailsModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/30 opacity-5" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="ns-surfacePrimary flex flex-col h-full justify-between w-full max-w-md  sm:max-w-2xl transform overflow-hidden  p-8 text-left align-middle transition-all">
                <div>
                  <div className="flex items-center justify-between">
                    {address ? <span>{address}</span> : <span />}
                    <button onClick={() => setOpenDetailsModal(false)}>
                      <Image
                        src={'/neosound-icons/UI/exit/exit-default.svg'}
                        alt="More details"
                        width={32}
                        height={32}
                        objectFit="cover"
                      />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div className="border border-stone-600 overflow-hidden">
                      <Image
                        src={Playlist[0].artCover}
                        alt="More details"
                        layout="responsive"
                        width={300}
                        height={300}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex justify-between items-center tex-sm">
                        <span>12/100 MINTED</span>
                        <span>0.02 ETH</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-4xl font-bold">The First Song</span>
                        <span className="text-sm mt-2">Artist 1</span>
                      </div>
                      <MintForm />
                      <button className="ns-buttonLarge" onClick={handleMint}>
                        Mint
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DetailsModal
