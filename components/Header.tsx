import { ConnectButton } from './ConnectButton'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full px-8">
      <span className="text-2xl" style={{fontFamily: 'luminari'}}>✨ My funky mint page ✨</span>
      <ConnectButton />
    </header>
  )
}
