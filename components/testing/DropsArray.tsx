import { useSWRDropsArray } from "@public-assembly/zora-drops-utils"
import { RawDisplayer } from "../RawDisplayer"

export function DropsArray({contracts = []}: {contracts: string[]} ) {
  const { data } = useSWRDropsArray({ contractAddresses: contracts, refreshInterval: 0 })
  
  return (
    <div><RawDisplayer data={data} /></div>
  )
}