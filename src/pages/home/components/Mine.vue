<template>
    <div class='mine'>
        <base-info class="info"></base-info>
        <bar :tag="wallet" class="line wallet" >
            <span slot="icon" class="iconfont">&#xe606;</span>
        </bar>
        <bar :tag="collection" class="line collection" >
            <span slot="icon" class="iconfont">&#xe604;</span>
        </bar>
        <bar :tag="album" class="line" >
            <span slot="icon" class="iconfont">&#xe679;</span>
        </bar>
        <bar :tag="card" class="line" >
            <span slot="icon" class="iconfont">&#xe669;</span>
        </bar>
        <bar :tag="emoji" class="line" >
            <span slot="icon" class="iconfont">&#xe60d;</span>
        </bar>
        <bar :tag="setting" class="line setting" >
            <span slot="icon" class="iconfont">&#xe600;</span>
        </bar>
        <div class="exit" @click="handleExit">退出</div>
    </div>
</template>

<script>
import BaseInfo from '@/conmom/baseInfo/BaseInfo'
import Bar from '@/conmom/bar/Bar'

export default {
  name: 'Mine',
  data () {
    return {
      wallet: '钱包',
      collection: '收藏',
      album: '相册',
      card: '卡包',
      emoji: '表情',
      setting: '设置'
    }
  },
  components: {
    BaseInfo,
    Bar
  },
  methods: {
    handleExit () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
.mine
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #eee
    .info
        margin-top 1.26rem
    .line >>> .warp
        border-bottom solid .01rem #eee
        .iconfont
            color rgb(0,100,200)
            font-size .5rem
    .wallet,.collection,.setting
        margin-top .4rem
        border-bottom solid .01rem #fff
    .exit
        width 80%
        margin-top .4rem
        line-height 1rem
        margin-left 10%
        border-radius .1rem
        background green
        color #fff
        text-align center
        font-size .35rem
</style>
