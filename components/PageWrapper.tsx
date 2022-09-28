import { Header } from './Header'
import { Footer } from './Footer'

export function PageWrapper({ children, ...props }: { children?: JSX.Element }) {
  return (
    <div className="pa_page-wrapper px-6 sm:px-12 ">
      <Header />
      <main {...props}>{children}</main>
      <Footer />
    </div>
  )
}
