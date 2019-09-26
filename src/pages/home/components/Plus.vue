<template>
<div class="base" @click="handleClick">
    <div class="plus" >
        <div class="icon-bar">
            <div class="iconfont icon">
                &#xe62d;
            </div>
            <div class="description">
                发起群聊
            </div>
        </div>
        <div class="icon-bar" @click="handleAdd">
            <div class="iconfont icon">
                &#xe64f;
            </div>
            <div class="description">
                添加好友
            </div>
        </div>
        <div class="icon-bar">
            <div class="iconfont icon">
                &#xe638;
            </div>
            <div class="description">
                扫一扫
            </div>
        </div>
        <div class="icon-bar">
            <div class="iconfont icon">
                &#xe614;
            </div>
            <div class="description">
                收付款
            </div>
        </div>
        <div class="icon-bar">
            <div class="iconfont icon">
                &#xe64a;
            </div>
            <div class="description">
                帮助
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Plus',
  methods: {
    handleAdd () {
      this.$router.push('/add')
      console.log(111)
    },
    handleClick () {
      this.$emit('hide')
    }
  }

}
</script>

<style lang='stylus' scoped>
.base
    position absolute
    z-index 3
    top 0
    left 0
    right 0
    bottom 0
    .plus
        position relative
        float right
        z-index 2
        background #444
        margin-top .86rem
        margin-right .2rem
        width 4rem
        color #fff
        line-height .86rem
        .icon-bar
            display flex
            border-bottom solid .02rem #333
            .icon
                margin-left .4rem
                font-size .4rem
                font-weight 900
            .description
                margin-left .4rem
</style>
