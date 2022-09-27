import { useCurationFunctions } from '@public-assembly/assemble-curation-functions'
import { useValidation } from '@public-assembly/assemble-curation-validation'
import { Wallet } from 'ethers'
import { useState } from 'react'

export type WalletValidationProps = {
  /**
   * nftAddress: send in an nft address to check wallet balance for
   * userAddress: send in wallet address to check nft balance of
   */
  userAddress: string
  curationContractAddress?: string
}

const curationContractAddress = '0xdb5D0A79d700c5F823b822F97631DbA2d1E31A63'

export const CurationFunctions = ({ userAddress }: WalletValidationProps) => {
  const [listing, setListing] = useState('')
  const {
    addListingWrite,
    txnAddListingStatus,
    removeListingWrite,
    txnRemoveListingStatus,
  } = useCurationFunctions({ curationContractAddress, listing })

  const {
    curationPassAddress,
    userCurationPassBalance,
    isCurationPassHolder,
    isCurationOwner,
  } = useValidation({
    userAddress,
    curationContractAddress,
  })

  return (
    <div className="max-w-md  bg-slate-300 p-4 rounded-lg">
      <h1 className="text-lg font-semibold">Curator Functions</h1>
      <label className="block my-4">
        <span className="text-gray-700">Add Listing ({txnAddListingStatus})</span>
        <input
          className="p-2 mt-2 block w-full rounded-md bg-slate-200"
          onChange={(e) => setListing(e.target.value)}
        />
        <button
          disabled={!isCurationPassHolder}
          className="bg-blue-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-blue-600 disabled:bg-blue-200"
          onClick={() => addListingWrite?.()}>
          Add Listing
        </button>
      </label>
      <label className="block my-4">
        <span className="text-gray-700">Remove Listing ({txnRemoveListingStatus})</span>
        <input
          className="p-2 mt-2 block w-full rounded-md bg-slate-200"
          onChange={(e) => setListing(e.target.value)}
        />
        <button
          disabled={!isCurationPassHolder}
          className="bg-blue-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-blue-600  disabled:bg-blue-200"
          onClick={() => removeListingWrite?.()}>
          Remove Listing
        </button>
      </label>
      <div className="grid gap-y-4">
        <div className="text-black">
          {'Curation Pass Address: '}
          <br></br>
          {curationPassAddress}
        </div>
        <div className="text-black">
          {'Curation Pass Balance: ' + userCurationPassBalance}
        </div>
        <div className="text-black">
          {'Curation Pass Holder? ' + isCurationPassHolder}
        </div>
        <div className="text-black">{'Curation Owner? ' + isCurationOwner}</div>
      </div>
    </div>
  )
}
