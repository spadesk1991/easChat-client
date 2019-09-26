<template>
    <div class="wirp">
        <div class="botton">
            <div class="voice iconfont">
                &#xe618;
            </div>
            <!-- <div class="input-wirp" v-html="content" contenteditable=true :v-model="content">
                // {{content}}
                <input class="input" type="text" >
            </div> -->
            <custom-input class="input-wirp" v-model='content'></custom-input>
            <div class="expression iconfont">
                &#xe61e;
            </div>
            <div v-if="!content" class="plus iconfont">
                &#xe63c;
            </div>
            <div v-if="content" class="send-wrip">
                <div class="send" @click="handleClick">
                    发送
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomInput from '@/conmom/input/CustomInput'
export default {
  name: 'Botton',
  data () {
    return {
      content: ''
    }
  },
  components: {
    CustomInput
  },
  methods: {
    handleClick () {
      this.$emit('send', this.content)
      this.content = ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.wirp
    position fixed
    left 0
    bottom 0
    z-index 2
    overflow hidden
    width 100%
    height 16.4vh
    .botton
        width 100%
        position absolute
        left 0
        bottom 0
        display flex
        justify-content center
        align-items flex-end
        background #fff
        // border-top 8.5vh
        padding .2rem 0
        line-height 3.5vh
        text-align left
        .voice
            padding-left .2rem
            width 10%
            font-size .5rem
            align-self flex-end
        .input-wirp
            width 65%
            font-size .3rem
            line-height .25rem
            outline: none
            border-bottom solid .02rem #eee
        .expression
            width 10%
            font-size .55rem
            align-self flex-end
        .plus
            width 10%
            font-size .6rem
            align-self flex-end
        .send-wrip
            width 10%
            font-size .5rem
            align-self flex-end
            .send
                border-radius .05rem
                width 80%
                color #fff
                text-align center
                font-size .25rem
                line-height .45rem
                height .45rem
                background green
</style>
