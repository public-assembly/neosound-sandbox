import { DropsMinter } from '@public-assembly/erc721-drops-minter'
import { SimpleMint } from 'components/SimpleMint'

const TEST_MINT_CONTRACTS = [
  '0x47191cb94c0b6925db9f15e000cf8e3e8864fc9b',
  '0xb7a791c3b5a0aa833e638250f982ebd29194f02c',
  '0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4',
]

function Page() {
  return (
    <section className="flex flex-row gap-4 p-4" style={{flexWrap: 'wrap'}}>
      
      {TEST_MINT_CONTRACTS.map((edition: any) =>
        <SimpleMint key={edition} collectionAddress={edition} />
      )}
    </section>
  )
}

export default Page
