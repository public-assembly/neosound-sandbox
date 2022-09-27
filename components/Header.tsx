import { ConnectButton } from './ConnectButton'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full px-8">
      <div className="text-2xl underline hover:text-blue-500">      
        <Link
          href="/fac_val"
        >
          <a>
            CLICK HERE FOR FACTORY + VAL TEST
          </a>
        </Link>
      </div>
      <ConnectButton />
    </header>
  )
}
