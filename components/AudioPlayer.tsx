import { PlayerWrapper } from './player-content/wrappers/PlayerWrapper'
import { AudioPlayerControls } from './player-content/wrappers/ControlsContainer'
import { AudioPlayerDisplayInfo } from './player-content/wrappers/InfoContainer'
import { VolumeSlider } from './player-content/controls/VolumeSlider'

const AudioPlayer = () => {
  return (
    <PlayerWrapper>
      <AudioPlayerControls />
      <div className="flex justify-between items-center">
        <AudioPlayerDisplayInfo />
        <VolumeSlider />
      </div>
    </PlayerWrapper>
  )
}

export default AudioPlayer
