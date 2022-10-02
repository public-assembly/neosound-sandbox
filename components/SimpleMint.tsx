import { DropsComponents } from '@public-assembly/erc721-drops-minter'
import { DropsContractProvider } from '@public-assembly/zora-drops-utils'

export function SimpleMintUi() {
  return (
    <div style={{width: 400}}>
      <DropsComponents.Thumbnail />
      <DropsComponents.MintButton />
      <DropsComponents.MintQuantity />
    </div>
  )
}

export function SimpleMint({collectionAddress = '0xb7a791c3b5a0aa833e638250f982ebd29194f02c'}: {collectionAddress?: string}) {
  return (
    <div
      className="p-10 overflow-hidden border-4"
      style={{
        maxWidth: 500,
        backgroundImage: `url(https://db13.mypinata.cloud/ipfs/QmYqWrUgUJkMcWosgFk85SDQFGRwjACzgTksp7aiuf9yRr)`
      }}
    >
      <DropsContractProvider collectionAddress={collectionAddress}>
        <SimpleMintUi />
        <div>
          <DropsComponents.SalesInfo />
        </div>
      </DropsContractProvider>
    </div>
  )
}
