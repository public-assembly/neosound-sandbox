import { useState } from 'react'
import { GrPlayFill, GrPauseFill } from 'react-icons/gr'

export const PlayToggle = () => {
  //HARDCODED FOR NOW TO BE CONSUMED BY CONTEXT
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={!isPlaying ? 'inline-block' : 'hidden'}>
        <GrPlayFill className="w-6 h-6" />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={isPlaying ? 'inline-block' : 'hidden'}>
        <GrPauseFill className="w-6 h-6" />
      </button>
    </>
  )
}
