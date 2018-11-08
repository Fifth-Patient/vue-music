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
  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider.vue'

export default {
  created() {
    this._getRecommend()
  },
  data() {
    return {
      recommends: []
    }
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
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

</style>
