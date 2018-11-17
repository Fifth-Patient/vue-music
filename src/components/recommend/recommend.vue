<template>
  <div class="recommend">
    <div v-if="recommends.length">
      <slider>
        <div v-for="item in recommends" :key="item.index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for="(item, index) in discLikst" :key="index" class="item">
          <div class="icon">
            <img width="60" height="60" :src="item.imgurl">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRecommend, getDiscLikst } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider.vue'

export default {
  created() {
    this._getRecommend()
    this._getDiscLikst()
  },
  data() {
    return {
      recommends: [],
      discLikst: []
    }
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscLikst() {
      getDiscLikst().then(res => {
        if (res.code === ERR_OK) {
          this.discLikst = res.data.list
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
.recommend-list
  .list-title
    height: 65px
    line-height: 65px
    text-align: center
    font-size: $font-size-medium
    color: $color-theme
  .item
    display: flex
    box-sizing: border-box
    align-items: center
    padding: 0 20px 20px 20px
    .icon
      flex: 0 0 60px
      width: 60px
      padding-right: 20px
    .text
      display: flex
      flex-direction: column
      justify-content: center
      line-height: 20px
      overflow: hidden
      font-size: $font-size-medium
      .name
        margin-bottom: 10px
      .desc
        color: $color-text-d
</style>
