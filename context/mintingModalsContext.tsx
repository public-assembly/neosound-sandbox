import { useAuth } from 'hooks/useAuth'
import { createContext, useContext, useState } from 'react'

interface MintingContextProps {
  openConnectWalletModal: boolean
  setOpenConnectWalletModal: (openConnectWalletModal: boolean) => void
  openDetailsModal: boolean
  setOpenDetailsModal: (openDetailsModal: boolean) => void
}

interface MintingProviderProps {
  children: JSX.Element | JSX.Element[]
}
const MintingContext = createContext<MintingContextProps>({} as MintingContextProps)

export function MintContextProvider({ children }: MintingProviderProps) {
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState(false)
  const [openDetailsModal, setOpenDetailsModal] = useState(false)

  return (
    <MintingContext.Provider
      value={{
        openConnectWalletModal,
        setOpenConnectWalletModal,
        openDetailsModal,
        setOpenDetailsModal,
      }}>
      {children}
    </MintingContext.Provider>
  )
}

export function useMintingContext() {
  const context = useContext(MintingContext)
  const {
    openConnectWalletModal,
    setOpenConnectWalletModal,
    openDetailsModal,
    setOpenDetailsModal,
  } = context
  const { address } = useAuth()

  if (!context) {
    throw new Error('useViewsToggle must be used within a ViewProvider')
  }

  return {
    openConnectWalletModal,
    setOpenConnectWalletModal,
    openDetailsModal,
    setOpenDetailsModal,
    address,
  }
}
