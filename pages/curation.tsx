import {
  useOwnerCurationFunctions,
  useCurationFunctions,
} from '@public-assembly/assemble-curation-functions'
import { useState } from 'react'
import { NextPage } from 'next'

const curationContractAddress = '0xdb5D0A79d700c5F823b822F97631DbA2d1E31A63'

const Curation: NextPage = () => {
  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedTokenPass, setUpdatedTokenPass] = useState('')
  const {
    updateTitleWrite,
    txnUpdateTitleStatus,
    updateTokenPassWrite,
    txnUpdateTokenPassStatus,
  } = useOwnerCurationFunctions({
    curationContractAddress,
    updatedTitle,
    updatedTokenPass,
  })

  return (
    <div className="mx-auto max-w-sm">
      <div className="flex flex-wrap"></div>
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
          Update Title
        </button>
      </label>
    </div>
  )
}

export default Curation
