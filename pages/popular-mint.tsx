import { EditionsAudioPlayer } from "@public-assembly/audio-player-ui";
import { DropsContextProvider } from '@public-assembly/zora-drops-utils'
import { MintTrackListing } from '../components/MintTrackListing'

function DmbkMint() {
  const TEST_MINT_CONTRACTS = [ 
    '0x03b62a8fbca4d0f00d941bec48907d3ad430961f',
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
