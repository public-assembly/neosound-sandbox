import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const listenPage = router.pathname === '/'
  const curatePage = router.pathname === '/curate'
  const deployPage = router.pathname === '/deploy'
  const aboutPage = router.pathname === '/about'
  return (
    <nav className="pa_nav flex items-center  justify-start text-neutral-400">
      <div className="pa_nav__links-group hidden sm:flex items-center gap-3">
        <Link href={'/'}>
          <button className={`${listenPage && 'pa_nav__item_current'} pa_nav__item `}>
            Listen
          </button>
        </Link>
        <Link href={'/'}>
          <button className={`${curatePage && 'pa_nav__item_current'} pa_nav__item `}>
            Curate
          </button>
        </Link>
        <Link href={'/'}>
          <button className={`${deployPage && 'pa_nav__item_current'} pa_nav__item `}>
            Deploy
          </button>
        </Link>
        <Link href={'/about'}>
          <button className={`${aboutPage && 'pa_nav__item_current'} pa_nav__item `}>
            About
          </button>
        </Link>
      </div>
      <div className="block sm:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Image
            src={'/neosound-icons/mobileMenu/mobileMenu-open.svg'}
            alt="Menu open"
            width={32}
            height={32}
          />
        </button>
        {mobileMenuOpen && (
          <div className="text-6xl font-semibold  text-black absolute inset-0 bg-pink-400 h-screen   flex flex-col justify-center z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="fixed top-3 left-6">
              <Image
                src={'/neosound-icons/mobileMenu/mobileMenu-close.svg'}
                alt="Menu close"
                width={32}
                height={32}
              />
            </button>
            <div className="flex flex-col gap-6  ">
              <Link href={'/'}>
                <button
                  className={`${listenPage && 'pa_nav__item_current'} pa_nav__item `}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  Listen
                </button>
              </Link>
              <Link href={'/'}>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`${curatePage && 'pa_nav__item_current'} pa_nav__item `}>
                  Curate
                </button>
              </Link>
              <Link href={'/'}>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`${deployPage && 'pa_nav__item_current'} pa_nav__item `}>
                  Deploy
                </button>
              </Link>
              <Link href={'/about'}>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`${aboutPage && 'pa_nav__item_current'} pa_nav__item `}>
                  About
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
