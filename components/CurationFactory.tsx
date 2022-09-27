import { useCurationFactory } from "@public-assembly/assemble-curation-factory"
import { BigNumber, utils } from "ethers"
import { useContractEvent } from "wagmi"

export type CurationFactoryProps = {
    /**
     * curationFactoryAddress: Address of curation contract factory
     * curationManagerAddress: Address to set as curation contract onwer
     * curationTitle: Desired title of curation contract
     * curationPassAddress: ERC721 contract address that will be used to gate curation functions
     * curationStartsActive: True/false bool to set whether curation functions begin as active
     */
    curationFactoryAddress: string
    curationManagerAddress: string
    curationTitle: string
    curationPassAddress: string
    curationStartsActive: boolean
}

export function CurationFactory({
    curationFactoryAddress,
    curationManagerAddress,
    curationTitle,
    curationPassAddress,
    curationStartsActive,
}: CurationFactoryProps) {
    const { 
        deployConfig,
        deployWrite, 
        deployWriteData, 
        txnDeployData, 
        txnDeployStatus 
    } = useCurationFactory({
        curationFactoryAddress,
        curationManagerAddress,
        curationTitle,
        curationPassAddress,
        curationStartsActive,
    })

    // const newCurationContactAddress = txnDeployData ? utils.defaultAbiCoder.decode(["string"], txnDeployData.logs[3].data) : "undefined"
    const newCurationContactAddress = txnDeployData ? txnDeployData.logs[3].data.toString() : "undefined"


    console.log('deploy config: ', deployConfig)
    console.log('deploy data: ', deployWriteData)
    console.log('deploy txn data: ', txnDeployData)
    console.log('deploy txn status: ', txnDeployStatus)

    return (
        <div className="flex flex-col w-full gap-1 p-4 text-black">
            <div>
                <button
                    className="border-2 border-solid border-black bg-red-800 p-2 text-white hover:bg-red-400"
                    onClick={() => deployWrite()}>
                    DEPLOY CURATION CONTRACT
                </button>
                <div>
                    {"Factory txn status: " + txnDeployStatus}
                </div>
                <div>
                    {"Factory txn data: " + JSON.stringify(txnDeployData)}
                </div>        
                <div>
                    {"CuratorDeployed log Hex Data: " + newCurationContactAddress}
                </div>     
                <div>
                    {"CuratorDeployed decoded: " + " havent figured this out yet... "}
                </div>                                                             
            </div>
        </div>
    )
}