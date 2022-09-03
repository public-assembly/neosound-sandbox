import { Box, Heading } from 'degen'
import { ConnectButton } from './ConnectButton'

export function Header() {
  return (
    <Box as="header" display="flex" justifyContent="space-between" width="full" padding="4">
      <Heading level="2">Header</Heading>
      <ConnectButton />
    </Box>
  )
}
