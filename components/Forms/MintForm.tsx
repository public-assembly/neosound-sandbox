import { useState } from 'react'
import Image from 'next/image'

const MintForm = () => {
  const [amount, setAmount] = useState(0)
  return (
    <div className="flex items-center  gap-8">
      <button onClick={() => setAmount(amount === 0 ? 0 : amount - 1)}>
        <Image
          src={'/neosound-icons/UI/counter/counterMinus-default.svg'}
          alt="minus"
          width={24}
          height={24}
          objectFit="cover"
        />
      </button>
      {amount && <span className="text-2xl">{amount}</span>}
      <button onClick={() => setAmount(amount + 1)}>
        <Image
          src={'/neosound-icons/UI/counter/counterPlus-default.svg'}
          alt="minus"
          width={24}
          height={24}
          objectFit="cover"
        />
      </button>
    </div>
  )
}

export default MintForm
