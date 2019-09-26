
<template>
    <div class="header">
      <div class="text">微信（8）</div>
      <div class="iconfont plus" @click="handleClick">&#xe6c9;</div>
      <div class="iconfont query">&#xe61d;</div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    handleClick () {
      this.$emit('chuange')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        z-index 2
        position fixed
        top 0
        width 100%
        height .86rem
        line-height .86rem
        background $bgColor
        color #fff
        font-size .3rem
        .text
            float left
            margin-left .2rem
        .query
            float right
            margin-right .6rem
            font-size .5rem
        .plus
            float right
            margin-right .2rem
            font-size .6rem
</style>
