import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { Box, BoxProps, Button, Text, Avatar } from 'degen'
import { useAuth } from '../hooks/useAuth'

export interface ConnectButtonProps extends BoxProps {}

export function ConnectButton({ ...props }: ConnectButtonProps) {
  const { ensAvatar, ensName } = useAuth()
  
  return (
    <Box {...props} className={['connect-button-wrapper']}>
      <RKConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          return (
            <Box
              {...(!mounted && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}>
              {(() => {
                if (!mounted || !account || !chain) {
                  return <Button onClick={openConnectModal} size="small" variant="tertiary">Connect Wallet</Button>
                }
                return (
                  <Button onClick={openAccountModal} size="small" variant="tertiary">
                    <Box display="flex" alignItems="center" gap="2">
                      <Avatar label={ensName} src={ensAvatar || ''} size="6" />
                      {account.displayName}
                    </Box>
                  </Button>
                )
              })()}
            </Box>
          )
        }}
      </RKConnectButton.Custom>
    </Box>
  )
}
