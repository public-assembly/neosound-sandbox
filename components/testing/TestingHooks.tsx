import { useDropsRequest, useSWRDropsRequest } from '@public-assembly/zora-drops-utils'
import { RawDisplayer } from './../RawDisplayer'

export function TestHooks({contractAddress}: {contractAddress: string}) {
  const { data, error, isLoading, isValidAddress } = useDropsRequest({
    contractAddress: contractAddress,
    networkId: '1'
  })

  const { data: swrData, error: swrError, isLoading: swrLoading, isValidAddress: swrValid } = useSWRDropsRequest({
    contractAddress: contractAddress,
    networkId: '1'
  })
  
  return (
    <>
      <h1 className="text-xl">Simple Request Hook:</h1>
      <br />
      {!isLoading ? <RawDisplayer data={{data, error, isValidAddress}} /> : <p>...loading</p>}
      <br />
      <hr className="border border-b-0 border-dashed"/>
      <br />
      <h1 className="text-xl">SWR Request Hook:</h1>
      <br />
      {!swrLoading ? <RawDisplayer data={{ swrData, swrError, swrValid }} /> : <p>...loading</p>}
    </>
  )
}