// @ts-nocheck
import React from "react";
import {
  DropsContractProvider,
  useDropsContractProvider,
  addIPFSGateway
} from "@public-assembly/zora-drops-utils";
import { useEnsName } from 'wagmi'

function MintUI() {
  const {
    collectionData: data,
    collectionAddress,
    mintQuantity,
    totalPrice,
    transaction: {
      purchaseLoading,
      purchaseSuccess,
      txHash,
    },
    errors: {
      insufficientFunds
    },
    purchaseLimit: {
      maxAmount,
      prettyMaxAmount,
    },
    inventory: {
      prettyInventory
    },
    balance: {
      walletBalance,
      walletLimit
    },
    setMintQuantity,
    purchase
  } = useDropsContractProvider()
  
  const src = React.useMemo(() =>
    data?.editionMetadata?.imageURI ? addIPFSGateway(data?.editionMetadata?.imageURI) : '',
    [data, data?.editionMetadata?.imageURI])

  const creator = React.useMemo(() => data?.creator && data?.creator,[data])
  const name = React.useMemo(() => data?.name && data?.name,[data])

  const { data: ensName } = useEnsName({
    address: data?.creator,
  })
  
  return (
    <div className="grid p-4 grid-cols-3 border border-solid border-1 rounded-xl gap-4">
      <div className="aspect-square h-full relative rounded-xl overflow-hidden shadow-sm">
        <img className="inset-0 absolute" src={src} />
      </div>
      <div className="flex flex-col col-span-2 h-full justify-between">
        <div>
          <h3 className="text-lg">Track: {data?.name}</h3>
          <h4 className="text-lg">Artist: {ensName ?? creator}</h4>
          <hr className="my-2"></hr>
          <p>{collectionAddress}</p>
          <p>{data?.editionMetadata?.description}</p>
          <p>Maximum per address: {prettyMaxAmount}</p>
          <p>Sold: {prettyInventory} NFTs</p>
          <p>Price: {totalPrice?.pretty}Ξ</p>
          <hr className="my-2"></hr>
          <p>You Own: {walletBalance} NFT{`${walletBalance > 1 || walletBalance === 0 ? 's' : ''}`}</p>
        </div>
        <div>
          {purchaseLoading ? 'Tx Processing' : ''}
          {purchaseSuccess ? 'Minted!' : ''}
          <br />
          {txHash ? txHash : ''}
        </div>
        {!walletLimit
          ? <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                name="mint-quantity"
                step="1"
                min="1"
                max={maxAmount - Number(walletBalance)}
                value={mintQuantity?.name}
                onChange={setMintQuantity}
                className={`
                  form-input px-4 py-3 rounded-full
                  ${insufficientFunds ? 'pointer-events-none opacity-30' : ''}
                `}
              />
              <button
                onClick={purchase}
                className={`
                bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
                ${insufficientFunds ? 'pointer-events-none opacity-30' : ''}
                `}
              >
                {!insufficientFunds
                  ? <span>Purchase {mintQuantity?.name} NFT{`${mintQuantity?.queryValue > 1 || walletBalance === 0 ? 's' : ''}`}</span>
                  : <span>Insufficient Funds</span>
                }
              </button>
            </div>
          : <div className="py-4"><span>You have minted the maximum amount per wallet.</span></div>
        }
      </div>
    </div>
  )
}

export function DropMintTest({collectionAddress}: {collectionAddress: string}) {
  const successCallback = React.useCallback(() => {
    console.log('MINTED IT')
  }, [])
  console.log(collectionAddress)
  return (
    <DropsContractProvider
      collectionAddress={collectionAddress}
      onSuccessCallback={successCallback}
    >
      <MintUI />
    </DropsContractProvider>
  )
}