import { DropsComponents } from '@public-assembly/erc721-drops-minter'
import { DropsContractProvider } from '@public-assembly/zora-drops-utils'

export function SimpleMintUi() {
  return (
    <div style={{width: 400}}>
      <DropsComponents.Thumbnail />
      <DropsComponents.MintButton />
    </div>
  )
}

export function SimpleMint() {
  return (
    <DropsContractProvider collectionAddress='0xb7a791c3b5a0aa833e638250f982ebd29194f02c'>
      <SimpleMintUi />
      <DropsComponents.Metadata />
    </DropsContractProvider>
  )
}
