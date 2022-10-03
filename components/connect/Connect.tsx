import { ConnectButton } from '@rainbow-me/rainbowkit'

export function Connect() {
  return (
    <div className="connect-button-wrapper relative flex items-center pr-3 pl-3 py-1.5 rounded-2xl bg-slate-100 overflow-hidden">
      <ConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, connected }) => {
          return (
            <>
              {(() => {
                if (!connected) {
                  return <button onClick={openConnectModal} className="flex items-center ns-textLight border border-white px-4 py-1  hover:text-white">Connect Wallet</button>
                }/*
                if (chain.unsupported) {
                  return <div className="text-red-400 text-sm">&#x26A0; Wrong Network</div>
                }*/
                return (
                  <button onClick={openAccountModal}>
                    <div className="flex items-center gap-2 text-sm">
                      {/*account.displayName*/}
                    </div>
                  </button>
                )
              }
            )}
          </>
        )
        }}
        
      </ConnectButton.Custom>
    </div>
  )
}
