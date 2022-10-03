import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import Image from 'next/image'
import { useConnectModal } from '@rainbow-me/rainbowkit'

interface ConnectWalletModalProps {
  setOpenConnectWalletModal(value: boolean): void
  openConnectWalletModal: boolean
  caption: string
}

const ConnectWalletModal = ({
  openConnectWalletModal,
  setOpenConnectWalletModal,
  caption,
}: ConnectWalletModalProps) => {
  const { openConnectModal } = useConnectModal()
  return (
    <Transition appear show={openConnectWalletModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setOpenConnectWalletModal(false)}>
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
              <Dialog.Panel className="ns-surfacePrimary flex flex-col h-[60vh] sm:h-80 justify-between w-full max-w-md  sm:max-w-lg transform overflow-hidden  p-6 text-left align-middle transition-all">
                <div>
                  <div className="flex items-center justify-end">
                    <button onClick={() => setOpenConnectWalletModal(false)}>
                      <Image
                        src={'/neosound-icons/UI/exit/exit-default.svg'}
                        alt="More details"
                        width={32}
                        height={32}
                        objectFit="cover"
                      />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="ns-headerLarge font-medium leading-6 text-gray-900">
                    Connect wallet
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="ns-labelSmall">{caption}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    className="ns-buttonLarge"
                    onClick={() => {
                      openConnectModal?.(), setOpenConnectWalletModal(false)
                    }}>
                    Connect
                  </button>
                  <p className="ns-labelSmall text-center mt-4">
                    Dont have a wallet? click
                    <Link href={'/'}>
                      <span className="font-semibold mx-1 cursor-pointer">here</span>
                    </Link>
                    to get one
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ConnectWalletModal
