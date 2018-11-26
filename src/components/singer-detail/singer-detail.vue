<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { ERR_OK } from 'api/config'
import { getSingerDetail } from 'api/singer'
import { getSongVkey } from 'api/song'
import { createSong } from 'common/js/song'
import musicList from 'components/music-list/music-list'

export default {
  created() {
    this._getSingerDetail()
  },
  data() {
    return {
      songs: []
    }
  },

  computed: {
    ...mapGetters(['singer']),
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    }
  },
  methods: {
    _getSingerDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normaiizeSongs(res.data.list)
        }
      })
    },
    _normaiizeSongs(list) {
      let ret = []
      list.forEach((item, index) => {
        let { musicData } = item
        getSongVkey(musicData.songmid).then(res => {
          let vkey = res.data.items[0].vkey
          if (musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData, vkey))
          }
        })
      })
      return ret
    }
  },
  components: {
    musicList
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
