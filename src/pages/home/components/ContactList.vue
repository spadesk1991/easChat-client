<template>
    <div class="contact" ref="wrapper" >
        <div>
            <div v-for="(item,index) of contactList" :key="index">
                <div>
                    <div class="tag">{{item.tag}}</div>
                    <div @click="handleClick(child._id)" class="child-list" v-for="(child,i) of item.children" :key="i">
                        <div class="imp-warp">
                            <img class="img" :src="child.imgUrl" alt="">
                        </div>
                        <div class="info">
                            {{child.info}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'ContactList',
  props: {
    contactList: {
      type: Array
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper)
    })
  },
  methods: {
    handleClick (id) {
      console.log('list', id)
      this.$router.push(`/info/${id}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact
    overflow hidden
    position absolute
    top .86rem
    left 0
    right 0
    bottom 1rem
    .tag
        width 100%
        height .4rem
        line-height .4rem
        background #eee
        padding-left .2rem
    .child-list
        width 100%
        height 1.2rem
        margin-left .2rem
        border-bottom solid .02rem #eee
        display flex
        .imp-warp
            overflow hidden
            height 0
            width .8rem
            padding-top .2rem
            padding-bottom 1rem
            .img
                width 100%
        .info
            margin-left .2rem
            height 1.2rem
            line-height 1.2rem
            font-size .35rem
</style>
