import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { useAuth } from "../hooks/useAuth"
import { useState, useEffect } from "react"
import { CurationFactory } from 'components/CurationFactory'
import { CurationValidation } from 'components/CurationValidation'


const HARDCODED_CURATION_FACTORY_ADDRESS = "0x6ef64a5F2F94e45a1cE59036DE5B805f94139472"
const HARDCODED_CURATION_CONTRACT_ADDRESS = "0xC53C2089Cf5d4E4dAf68b466663A3eEd06779F6e"

const FAC_VAL: NextPage = () => {

    const { address, ensName } = useAuth()

    const currentUserAddress = address ? address : ""

    // code for form UI
    const [factoryInputs, setFactoryInputs] = useState({
        curationManager: currentUserAddress,        
        curationTitle: "Example Title",
        curationPassAddress: "0x3795102c8508e0912b937ee263904d488407abba",
        startsActive: "false"
    })      

    const str2bool = (string: string) => {
        const lowerCased = string.toLowerCase()
        const bool = lowerCased === "true" ? true : false
        return bool
    }

    console.log("what is the active: ", str2bool(factoryInputs.startsActive))

    
    return (
        <div className="flex flex-row flex-wrap justify-start">
            <div className="pl-4  flex flex-row flex-wrap justify-start w-full">
                <div className="flex flex-row justify-center w-7/12 h-fit border-2 border-black border-solid">
                    <div className="w-full justify-center grid grid-cols-2">
                        <div className="text-black text-center ">
                        Curation Manager Address
                        </div>
                        <input
                            className="text-black text-center bg-slate-200"
                            placeholder="curationManager"
                            type="text"
                            value={factoryInputs.curationManager}
                            onChange={(e) => {
                                e.preventDefault();
                                setFactoryInputs(current => {
                                return {
                                    ...current,
                                    curationManager: e.target.value
                                }
                                })
                            }}
                            required                    
                        >
                        </input>
                    </div>               
                </div>

                <div className="flex flex-row justify-center w-7/12 h-fit border-2 border-black border-solid">
                    <div className="w-full justify-center grid grid-cols-2">
                        <div className="text-black text-center ">
                            Curation Title
                        </div>
                        <input
                            className="text-black text-center bg-slate-200"
                            placeholder="curationTitle"
                            type="text"
                            value={factoryInputs.curationTitle}
                            onChange={(e) => {
                                e.preventDefault();
                                setFactoryInputs(current => {
                                return {
                                    ...current,
                                    curationTitle: e.target.value
                                }
                                })
                            }}
                            required                    
                        >
                        </input>
                    </div>     
                </div>

                <div className="flex flex-row justify-center w-7/12 h-fit border-2 border-black border-solid">
                    <div className="w-full justify-center grid grid-cols-2">
                        <div className="text-black text-center ">
                            Curation Pass Address
                        </div>
                        <input
                            className="text-black text-center bg-slate-200"
                            placeholder="curationPassAddress"
                            type="bool"
                            value={factoryInputs.curationPassAddress}
                            onChange={(e) => {
                                e.preventDefault();
                                setFactoryInputs(current => {
                                return {
                                    ...current,
                                    curationPassAddress: e.target.value
                                }
                                })
                            }}
                            required                    
                        >
                        </input>
                    </div>     
                </div>



                <div className="flex flex-row justify-center w-7/12 h-fit border-2 border-black border-solid">
                    <div className="w-full justify-center grid grid-cols-2">
                        <div className="text-black text-center ">
                            Curation Starts Active
                        </div>
                        <input
                            className="text-black text-center bg-slate-200"
                            placeholder="startsActive"
                            type="text"
                            value={factoryInputs.startsActive}
                            onChange={(e) => {
                                e.preventDefault();
                                setFactoryInputs(current => {
                                return {
                                    ...current,
                                    startsActive: e.target.value
                                }
                                })
                            }}
                            required                    
                        >
                        </input>
                    </div>     
                </div>                




            </div>
            <CurationFactory
                curationFactoryAddress={HARDCODED_CURATION_FACTORY_ADDRESS}
                curationManagerAddress={factoryInputs.curationManager}
                curationTitle={factoryInputs.curationTitle}
                curationPassAddress={factoryInputs.curationPassAddress}
                curationStartsActive={str2bool(factoryInputs.startsActive)}
            />
            <CurationValidation
                userAddress={currentUserAddress}
                curationContractAddress={HARDCODED_CURATION_CONTRACT_ADDRESS}
            />
        </div>
    )

}

export default FAC_VAL