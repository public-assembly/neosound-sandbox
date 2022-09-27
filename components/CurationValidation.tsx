import React from 'react'
import { useValidation } from "@public-assembly/assemble-curation-validation"

export type WalletValidationProps = {
    /**
     * nftAddress: send in an nft address to check wallet balance for
     * userAddress: send in wallet address to check nft balance of
     */
    userAddress: string
    curationContractAddress: string
}

export function CurationValidation({ 
    userAddress, 
    curationContractAddress
}: WalletValidationProps) {

    const { 
        curationPassAddress,        
        userCurationPassBalance,
        isCurationPassHolder,
        isCurationOwner
    } = useValidation({
        userAddress, 
        curationContractAddress
    })

    return (
        <div className="text-black flex flex-col p-4 rounded-xl gap-1">
            <div>
            { "Current User Address: " + userAddress}
            </div>
            <div>
            { "Current Contract Address " + curationContractAddress}
            </div>      
            <div>
            { "Curation Pass Address: " + curationPassAddress}
            </div>      
            <div>
            { "User Balance of Curation Pass: " + userCurationPassBalance}
            </div>
            <div>
            { "User owns curation pass : " + isCurationPassHolder}
            </div>      
            <div>
            { "User is owner of curation contract : " + isCurationOwner }
            </div>           
        </div>
    )
}