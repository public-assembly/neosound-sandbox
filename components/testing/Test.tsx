import React from 'react'
import { returnDropEndpoint, DropContextProvider, DropsContextProvider } from '@public-assembly/zora-drops-utils'
import { RawDisplayer } from '../RawDisplayer'
import { TestProviderConsumer } from './TestProviderConsumer'
import { TestHooks } from './TestingHooks'
import { DropsArray } from './DropsArray'
import { TestArrayProviderConsumer } from './TestArrayProviderConsumer'

const goreliEndpoint = returnDropEndpoint('5')
const mainnetEndpoint = returnDropEndpoint('1')

const TEST_CONTRACTS = [
  '0xb7a791c3b5a0aa833e638250f982ebd29194f02c',
  '0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4',
  '0x2f0146ca3c62a33177959565ae9df2f86cf01551',
]

export function TestComponent() {
  const [address, setAddress] = React.useState(TEST_CONTRACTS[0])
  const handleSetAddress = React.useCallback((event: any) => {
    setAddress(event?.target.value)
  }, [setAddress])

  return (
    <div className="flex flex-col p-4 border border-solid border-1 rounded-xl">
      <h1 className="text-xl">Endpoints:</h1>
      <br />
      <RawDisplayer data={{
        mainnet: mainnetEndpoint,
        goerli: goreliEndpoint
      }} />
      <br />
      <h1 className="text-xl">Array of Drops:</h1>
      <br />
      <DropsArray contracts={TEST_CONTRACTS} />
      <br />
      <hr className="border border-b-0 border-dashed"/>
      <br />
      <DropsContextProvider contractAddresses={TEST_CONTRACTS} refreshInterval={0}>
        <TestArrayProviderConsumer />
      </DropsContextProvider>
      <br />
      <hr className="border border-b-0 border-dashed"/>
      <br />
      <h1 className="text-xl pb-2">Select A Contract:</h1>
      <select
        className="border border-solid border-1 p-2 border-black rounded-md"
        onChange={handleSetAddress}
        value={address}
      >
        {TEST_CONTRACTS.map((value) =>
          <option key={value} value={value}>{value}</option>
        )}
      </select>
      <br />
      <hr className="border border-b-0 border-dashed"/>
      <br />
      <DropContextProvider contractAddress={address}>
        <TestProviderConsumer />
      </DropContextProvider>
      <br />
      <hr className="border border-b-0 border-dashed"/>
      <br />
      <TestHooks contractAddress={address} />
      <br />
      <br />
      <br />
    </div>
  )
}