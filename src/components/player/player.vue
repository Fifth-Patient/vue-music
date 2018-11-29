<template>
  <div class="player" v-show="playList.length>0">
    <div class="normal-player" v-show="fullScreen">全屏</div>
    <div class="min-player" v-show="!fullScreen">最小化</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['fullScreen', 'playList'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.player
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  .normal-player
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 150
    background: $color-background
  .min-player
    display: flex
    align-items: center
    position: fixed
    left: 0
    bottom: 0
    z-index: 180
    width: 100%
    height: 60px
    background: $color-highlight-background
</style>
