import { NextPage } from 'next'
import { OwnerCurationFunctions } from 'components/OwnerCurationFunctions'
import { CurationFunctions } from 'components/CurationFunctions'
import { useAccount } from 'wagmi'

const Curation: NextPage = () => {
  const { address } = useAccount()
  const stringAddress = address as string
  return (
    <div className="flex gap-24">
      <OwnerCurationFunctions />
      <CurationFunctions userAddress={stringAddress} />
    </div>
  )
}

export default Curation
