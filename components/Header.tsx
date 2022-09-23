import { ConnectButton } from './ConnectButton'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center w-full px-12 backdrop-blur-[90px] z-50 ">
      <Image src={'/icons/Menu.svg'} alt="Menu" width={48} height={48} />
      <ConnectButton />
    </header>
  )
}
