import { Box, BoxProps } from 'degen'
import { Header } from './Header'
import { Footer } from './Footer'

interface PagewrapperProps extends BoxProps {
  children?: JSX.Element
}

export function PageWrapper({ children, ...props }: PagewrapperProps) {
  return (
    <>
      <Header />
      <Box as="main" {...props}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
