import { Header } from './Header'
import { Footer } from './Footer'
import AudioPlayer from './AudioPlayer'

export function PageWrapper({ children, ...props }: { children?: JSX.Element }) {
  return (
    <>
      <Header />
      <main {...props}>{children}</main>
      <AudioPlayer />
      <Footer />
    </>
  )
}
