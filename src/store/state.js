import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  currentIndex: -1,
  disc: {},
  topList: {},
  mode: playMode.sequence,
  searchHistory: []
}

export default state
