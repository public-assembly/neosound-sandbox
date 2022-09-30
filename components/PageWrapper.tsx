import { Header } from './Header'
import { Footer } from './Footer'

export function PageWrapper({ children, ...props }: { children?: JSX.Element }) {
  return (
    <>
      <div className=" bg-[url('/bgs/bg1.png')] fixed inset-0 bg-cover bg-center h-screen" />
      <div className="px-6 sm:px-12 pt-[150px] absolute inset-0 ">
        <Header />
        <main {...props}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
