import React from 'react'
import { useDropsContextProvider, addIPFSGateway } from "@public-assembly/zora-drops-utils";

export function ProviderImage() {
  const { data } = useDropsContextProvider()
  
  const src = React.useMemo(() =>
    data?.editionMetadata?.imageURI ? addIPFSGateway(data?.editionMetadata?.imageURI) : '',
    [data, data?.editionMetadata?.imageURI])

  return (
    <div style={{width: 300, height: 300}} className="relative">
      <img src={src} className="object-cover inset-0 absolute" />
    </div>
  )
}