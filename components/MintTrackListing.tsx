import React from 'react'
import { useDropsContextProvider } from "@public-assembly/zora-drops-utils";
import { useEnsName } from 'wagmi'
import { DropMintTest } from './DropMintTest';

export function TrackThumbnail({ data }: { data: any }) {
  const creator = React.useMemo(() => data?.creator && data?.creator,[data])
  const name = React.useMemo(() => data?.name && data?.name,[data])

  const { data: ensName } = useEnsName({
    address: data?.creator,
  })

  return (
    <div
      className="p-3 border cursor-pointer mb-4"
    >
      {ensName ?? creator} - {name}
    </div>
  )
}

export function MintTrackListing() {
  const { data } = useDropsContextProvider()
  return (
    <div className="flex flex-col mb-8">
      {data && data.map((edition: any) =>
        <DropMintTest key={edition?.address} collectionAddress={edition?.address} />
      )}
    </div>
  )
}