<template>
    <div class="Bar">
        <div class="warp">
            <div class="img-warp">
                <div class="icon">
                    <slot  name="icon">
                    </slot>
                </div>
            </div>
            <div class="tag">
                {{tag}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Bar',
  props: {
    tag: {
      type: String,
      default: '标签'
    }
  }
}
</script>

<style lang="stylus" scoped>
.Bar
    width 100%
    height 1rem
    background #fff
    .warp
        margin 0 .2rem
        height 1rem
        display flex
        text-align center
        line-height 1rem
        .icon
            width 1rem
        .tag
            margin-left .3rem
</style>
