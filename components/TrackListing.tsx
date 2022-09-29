import React from 'react'
import { useDropsContextProvider } from "@public-assembly/zora-drops-utils";
import { useEnsName } from 'wagmi'

export function TrackThumbnail({ data }: { data: any }) {
  if (!data) return null
  
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

export function TrackListing() {
  const { data } = useDropsContextProvider()
  return (
    <div className="flex flex-col mb-8">
      {data && data.map((edition: any) =>
        <TrackThumbnail key={edition?.name} data={edition} />
      )}
    </div>
  )
}