import NextNProgress from 'nextjs-progressbar'
import { getDefaultWallets, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit'
import { createClient, chain, configureChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { SWRConfig } from 'swr'
import '@rainbow-me/rainbowkit/styles.css'

const { chains, provider } = configureChains([chain.mainnet], [publicProvider()])
const { connectors } = getDefaultWallets({
  appName: 'BlockSyncer',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: '#050a09',
  },
  colors: {
    accentColor: '#050a09',
    accentColorForeground: '#ff89de',
    actionButtonBorder: '#050a09',
    actionButtonBorderMobile: '#ff89de;',
    actionButtonSecondaryBackground: '#ecf1f0',
    closeButton: '#ecf1f0',
    closeButtonBackground: '#050a09',
    connectButtonBackground: '#050a09',
    connectButtonBackgroundError: '#050a09',
    connectButtonInnerBackground: '#050a09',
    connectButtonText: '#050a09',
    connectButtonTextError: '#050a09',
    connectionIndicator: '#050a09',
    error: '#050a09',
    generalBorder: '#050a09',
    generalBorderDim: '#050a09',
    menuItemBackground: '#ff89de',
    modalBackdrop: 'rgba(0, 0, 0, 0.2)',
    modalBackground: '#ff89de',
    modalBorder: '#ecf1f0',
    modalText: '#ecf1f0',
    modalTextDim: '#050a09',
    modalTextSecondary: '#ecf1f0',
    profileAction: '#050a09',
    profileActionHover: '#050a09',
    profileForeground: '#050a09',
    selectedOptionBorder: '#050a09',
    standby: '#050a09',
  },
  fonts: {
    body: 'Barlow, sans-serif',
  },
  radii: {
    actionButton: '0',
    connectButton: '0',
    menuButton: '0',
    modal: '0',
    modalMobile: '0',
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: '...',
    selectedWallet: '...',
    walletLogo: '...',
  },
}
export function AppWrapper({ children }: { children: JSX.Element }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode theme={myCustomTheme}>
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}>
          <NextNProgress
            color="rgba(0,0,0,.5)"
            startPosition={0.125}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          {children}
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
