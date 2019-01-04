import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  currentIndex: -1,
  disc: {},
  mode: playMode.sequence
}

export default state
