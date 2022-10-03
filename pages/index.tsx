import type { NextPage } from 'next'
import Head from 'next/head'
import { useCurationFunctions } from '@public-assembly/assemble-curation-functions'

const Home: NextPage = () => {

  const curationContractAddress = "0xe61787247Dac262c4394b457c958C69BA7080501"
  
  const { 
    getListingsRead, 
    getListingsError, 
    getListingsLoading, 
  } = useCurationFunctions({
    curationContractAddress
  })

  return (
    <div>
      <div>{JSON.stringify(getListingsRead, null, 2)}</div>
    </div>
  )
}

export default Home
