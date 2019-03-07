import { playMode } from 'common/js/config'
import { loadSearch, loadPlay } from 'common/js/catche'

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
  searchHistory: loadSearch(),
  playHistory: loadPlay()
}

export default state
