import { ViewsToggle } from 'components/ViewsToggle'
import { GridView } from 'components/views/Grid'
import { ListView } from 'components/views/List/ListView'
import { useState } from 'react'
import { useAuth } from 'hooks/useAuth'

const Listen = () => {
  const [view, setView] = useState('list')
  const { address } = useAuth()
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState(false)
  const [openDetailsModal, setOpenDetailsModal] = useState(false)

  return (
    <div>
      <ViewsToggle setView={setView} view={view} />
      {view === 'grid' ? (
        <GridView
          openDetailsModal={openDetailsModal}
          setOpenDetailsModal={setOpenDetailsModal}
          openConnectWalletModal={openConnectWalletModal}
          setOpenConnectWalletModal={setOpenConnectWalletModal}
          address={address}
        />
      ) : (
        <ListView
          openConnectWalletModal={openConnectWalletModal}
          setOpenConnectWalletModal={setOpenConnectWalletModal}
          address={address}
        />
      )}
    </div>
  )
}

export default Listen
