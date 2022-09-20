import { PlayToggle } from '../controls/PlayToggle'
import { ProgressBar } from '../controls/ProgressBar'
import { VolControls } from '../controls/VolControls'

export const AudioPlayerControls = () => {
  return (
    <div className="flex justify-between items-center">
      <PlayToggle />
      <ProgressBar />
      <VolControls />
    </div>
  )
}
