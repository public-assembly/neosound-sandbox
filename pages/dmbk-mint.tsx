import { EditionsAudioPlayer } from "@public-assembly/audio-player-ui";
import { DropsContextProvider } from '@public-assembly/zora-drops-utils'
import { MintTrackListing } from '../components/MintTrackListing'

function DmbkMint() {
  const TEST_MINT_CONTRACTS = [
    '0x47191cb94c0b6925db9f15e000cf8e3e8864fc9b',
    '0xb7a791c3b5a0aa833e638250f982ebd29194f02c',
    '0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4',
  ]

  return (
    <section className="flex flex-col gap-4">
      {TEST_MINT_CONTRACTS &&
        <DropsContextProvider contractAddresses={TEST_MINT_CONTRACTS as string[]}>
          <MintTrackListing />
        </DropsContextProvider>
      }
      {TEST_MINT_CONTRACTS && <EditionsAudioPlayer
        contractAddresses={TEST_MINT_CONTRACTS as string[]}
      />}
    </section>
  );
}

export default DmbkMint
