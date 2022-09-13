import { ConnectButton } from './ConnectButton'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full px-8">
      <h2 className="text-2xl">Header</h2>
      <ConnectButton />
    </header>
  )
}
