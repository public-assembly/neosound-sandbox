import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { Button, Avatar } from 'degen'
import { useAuth } from '../hooks/useAuth'

export function ConnectButton({ ...props }) {
  const { ensAvatar, ensName } = useAuth()
  
  return (
    <div {...props} className="connect-button-wrapper">
      <RKConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          return (
            <div
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
                  return <button onClick={openConnectModal} size="small" variant="tertiary">Connect Wallet</button>
                }
                return (
                  <button onClick={openAccountModal} size="small" variant="tertiary">
                    <div className="flex align-items-center gap-2">
                      <Avatar label={ensName} src={ensAvatar || ''} size="6" />
                      {account.displayName}
                    </div>
                  </button>
                )
              })()}
            </div>
          )
        }}
      </RKConnectButton.Custom>
    </div>
  )
}
