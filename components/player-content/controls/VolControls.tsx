import { useState } from 'react'
import { ImVolumeMedium, ImVolumeMute } from 'react-icons/im'

export const VolControls = () => {
  const [isMuted, setIsMuted] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsMuted(!isMuted)}
        className={`${!isMuted ? 'inline-block' : 'hidden'}  `}
        aria-label="volume">
        <ImVolumeMedium className="w-6 h-6" />
      </button>
      <button
        onClick={() => setIsMuted(!isMuted)}
        className={isMuted ? 'inline-block' : 'hidden'}
        aria-label="muted">
        <ImVolumeMute className="w-6 h-6 " />
      </button>
    </>
  )
}
