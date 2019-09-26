<template>
    <div class="tails">
        <div @click="handleClick('wechat')"   class="wechat">
            <div class="wrap">
                <div class="iconfont" :class="{active:show==='wechat'}">
                    &#xe62d;
                </div>
            </div>
            <div class="text">
            微信
            </div>
        </div>
        <div @click="handleClick('contact')"  class="contact">
            <div class="wrap">
                <div class="iconfont che2" :class="{active:show==='contact'}">
                &#xe60c;
                </div>
            </div>
            <div class="text">
            通讯录
            </div>
        </div>
        <div @click="handleClick('find')"  class="find">
            <div class="wrap">
                <div class="iconfont" :class="{active:show==='find'}">
                &#xe609;
                </div>
            </div>
            <div class="text">
            发现
            </div>
        </div>
        <div @click="handleClick('me')"  class="me">
            <div class="wrap">
                <div class="iconfont" :class="{active:show==='me'}">
                &#xe626;
                </div>
            </div>
            <div class="text">
            我
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tail',
  data () {
    return {
      show: '',
      user: null
    }
  },
  methods: {
    handleClick (check) {
      this.$emit('switch', check)
      this.show = check
    }
  }
}
</script>

<style lang="stylus" scoped>
    .tails
        position fixed
        bottom 0
        left 0
        display flex
        width 100%
        flex-direction row
        justify-content center
        height 1rem
        z-index 2
        border-top solid #eef .01rem
        background #fff
        .me ,.wechat,.contact,.find
            width 25%
            .wrap
                height .6rem
                .active
                    color green
                .iconfont
                    font-size .6rem
                    margin-top .1rem
                    text-align center
                    //color green
                .che2
                    font-size .5rem
            .text
                text-align center

</style>
