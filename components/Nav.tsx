import Image from 'next/image'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className="pa_nav flex items-center text-white justify-start">
      <div className="hidden sm:flex items-center gap-3">
        <Link href={'/'}>
          <span className="pa_nav__item cursor-pointer">Listen</span>
        </Link>
        <Link href={'/'}>
          <span className="pa_nav__item cursor-pointer">Curate</span>
        </Link>
        <Link href={'/'}>
          <span className="pa_nav__item cursor-pointer">Deploy</span>
        </Link>
        <Link href={'/'}>
          <span className="pa_nav__item cursor-pointer">About</span>
        </Link>
      </div>
      <div className="block sm:hidden">
        <Image
          src={'/neosound-icons/mobileMenu/mobileMenu-open.svg'}
          alt="Menu"
          width={32}
          height={32}
        />
      </div>
    </nav>
  )
}
