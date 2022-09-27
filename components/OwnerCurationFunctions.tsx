import { useOwnerCurationFunctions } from '@public-assembly/assemble-curation-functions'
import { useState } from 'react'

const curationContractAddress = '0xdb5D0A79d700c5F823b822F97631DbA2d1E31A63'

export const OwnerCurationFunctions = () => {
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedTokenPass, setUpdatedTokenPass] = useState('')
  const [listing, setListing] = useState('')
  const {
    updateTitleWrite,
    txnUpdateTitleStatus,
    updateTokenPassWrite,
    txnUpdateTokenPassStatus,
    ownerAddListingWrite,
    txnOwnerAddListingStatus,
    ownerRemoveListingWrite,
    txnOwnerRemoveListingStatus,
    pauseCurationWrite,
    txnPauseCurationStatus,
    resumeCurationWrite,
    txnResumeCurationStatus,
  } = useOwnerCurationFunctions({
    curationContractAddress,
    updatedTitle,
    updatedTokenPass,
    listing,
  })

  return (
    <div className="flex gap-24 ml-8 bg-slate-300 p-4 rounded-lg">
      <div className="max-w-md">
        <h1 className="text-lg font-semibold">Owner Functions</h1>
        <label className="block my-4">
          <span className="text-gray-700">Update Title ({txnUpdateTitleStatus})</span>
          <input
            className="p-2 mt-2 block w-full rounded-md bg-slate-200"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button
            className="bg-blue-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-blue-600"
            onClick={() => updateTitleWrite?.()}>
            Update Title
          </button>
        </label>
        <label className="block my-4">
          <span className="text-gray-700">
            Update Token Pass ({txnUpdateTokenPassStatus})
          </span>
          <input
            className="p-2 mt-2 block w-full rounded-md bg-slate-200"
            onChange={(e) => setUpdatedTokenPass(e.target.value)}
          />
          <button
            className="bg-blue-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-blue-600"
            onClick={() => updateTokenPassWrite?.()}>
            Update Token Pass
          </button>
        </label>
        <label className="block my-4">
          <span className="text-gray-700">
            Owner Add Listing ({txnOwnerAddListingStatus})
          </span>
          <input
            className="p-2 mt-2 block w-full rounded-md bg-slate-200"
            onChange={(e) => setListing(e.target.value)}
          />
          <button
            className="bg-blue-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-blue-600"
            onClick={() => ownerAddListingWrite?.()}>
            Owner Add Listing
          </button>
        </label>
        <label className="block my-4">
          <span className="text-gray-700">
            Owner Remove Listing ({txnOwnerRemoveListingStatus})
          </span>
          <input
            className="p-2 mt-2 block w-full rounded-md bg-slate-200"
            onChange={(e) => setListing(e.target.value)}
          />
          <button
            className="bg-blue-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-blue-600"
            onClick={() => ownerRemoveListingWrite?.()}>
            Owner Remove Listing
          </button>
        </label>
      </div>
      <div>
        <div>
          <label className="block my-4">
            <span className="text-gray-700">
              Pause Curation ({txnPauseCurationStatus})
            </span>
            <div></div>
            <button
              className="bg-red-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-red-600"
              onClick={() => pauseCurationWrite?.()}>
              Pause Curation
            </button>
          </label>
          <label className="block my-4">
            <span className="text-gray-700">
              Resume Curation ({txnResumeCurationStatus})
            </span>
            <div></div>
            <button
              className="bg-green-500 w-48 text-center p-2 mt-4 rounded-md text-white hover:bg-green-600"
              onClick={() => resumeCurationWrite?.()}>
              Resume Curation
            </button>
          </label>
        </div>
      </div>
    </div>
  )
}
