import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAuth } from 'hooks/useAuth'

const ConnectBtn = () => {
  const { logout } = useAuth()
  return (
    <>
    {/* 
      <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected = ready && account && chain

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}>
            {(() => {
              if (!connected) {
                return null
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network

    <div
      className="connect-button-wrapper relative flex items-center pr-3 pl-3 py-1.5 rounded-2xl bg-slate-100 overflow-hidden"
      {...props}
    >
      <ConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          return (
            <>
              {(() => {
                if (!mounted || !account || !chain) {
                  return <button onClick={openConnectModal} className="text-sm">Connect Wallet</button>
                }
                if (chain.unsupported) {
                  return <div className="text-red-400 text-sm">&#x26A0; Wrong Network</div>
                }
                return (
                  <button onClick={openAccountModal}>
                    <div className="flex items-center gap-2 text-sm">
                      <Avatar />
                      {account.displayName}
                    </div>

                  </button>
                )
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={() => logout()}
                    type="button"
                    className="flex items-center ns-textLight border border-white px-4 py-1  hover:text-white">
                    DISCONNECT
                  </button>
                </div>
              )
            })()}
          </div>
        )
      }}
                      </ConnectButton.Custom>*/}
                      </>
  )
}

export default ConnectBtn
