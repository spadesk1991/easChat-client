<template>
    <div class="add">
        <base-header class="header" headername="添加好友">
        </base-header>
            <div tag="div" to="/search" class="search" @click="handleClick">
                <div class="iconfont">&#xe61d;</div>
                <div class="text">微信号/QQ号/手机号</div>
            </div>
    </div>
</template>

<script>
import BaseHeader from '@/conmom/header/Header'
export default {
  name: 'Add',
  components: {
    BaseHeader
  },
  methods: {
    handleClick () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="stylus" scoped>
.add
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #eee
    .header >>> .right
        display none
    .search
        margin-top .4rem
        width 100%
        height 1rem
        background #fff
        display flex
        align-items center
        .iconfont
            font-size .5rem
            margin-left .2rem
        .text
            margin-left .2rem
            font-size .2rem
            color gray
</style>
