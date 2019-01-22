<template>
  <div class="search-list">
    <ul>
      <li class="search-item" v-for="item in searches" :key="item">
        <span class="text" @click="selectItem(item)">{{item}}</span>
        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    },
    deleteOne(item) {
      this.$emit('delete', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.search-list
  .search-item
    display: flex
    align-items: center
    height: 40px
    overflow: hidden
    .text
      flex: 1
      color: $color-text-l
    .icon
      .icon-delete
        font-size: $font-size-small
        color: $color-text-d
</style>
