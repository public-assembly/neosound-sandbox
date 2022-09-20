export const ProgressBar = () => {
  //HARDCODED FOR NOW TO BE CONSUMED BY CONTEXT
  const duration = 300
  const timePassed = 0
  //
  const timeLeft = () => {
    let mins: any = Math.floor((duration - timePassed) / 60)
    let secs: any = Math.floor((duration - timePassed) % 60)
    if (mins < 10) mins = `0${mins}`
    if (secs < 10) secs = `0${secs}`
    return `${mins}:${secs}`
  }
  return (
    <span className="w-full px-6 flex items-center gap-4 mx-auto">
      <input
        type="range"
        step={0.01}
        className="w-[90%] cursor-pointer"
        min={0}
        max={Math.floor(duration)}
      />
      <span>{timeLeft()}</span>
    </span>
  )
}
