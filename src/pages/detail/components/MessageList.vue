<template>
    <div class="wrap" ref="wrapper">
      <div>
        <div v-for="(item,index) of msgList" :key="index" >
            <div>
              <right-message v-if="item.self" :msg='item'></right-message>
              <left-message v-if="!item.self" :msg='item'></left-message>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import RightMessage from './RightMessage'
import LeftMessage from './LeftMessage'
import BScroll from 'better-scroll'

export default {
  name: 'MessageList',
  props: {
    msgList: {
      type: Array
    }
  },
  components: {
    RightMessage,
    LeftMessage
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
  },
  watch: {
    msgList () {
      setTimeout(() => {
        console.log(this.scroll.maxScrollY)
        this.scroll.scrollTo(0, this.scroll.maxScrollY)
      }, 500)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrap
        overflow hidden
        position fixed
        top .86rem
        left 0
        right 0
        bottom .86rem
        // background #eee
</style>
