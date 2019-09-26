<template>
    <div class="search">
        <div class="header">
            <div class="left" @click="handleBack">
                <div class="iconfont back-icon">&#xe605;</div>
            </div>
            <input v-model="keyword" class="text" type="text" placeholder="微信号/QQ号/手机号">
        </div>
        <div v-show="show" class="warp">
            <div class="searchPlan" @click="handleSearch">
                <div class="iconfont" >
                    &#xe64f;
                </div>
                <div class="description">
                    <span class="search-icon">搜索：</span>
                    <span class="keyword">{{keyword}}</span>
                </div>
            </div>
             <div class="list">
                <div   @click="handleClick" v-for="(item,index) of list" :key="index">
                <base-info class="info"></base-info>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BaseInfo from '@/conmom/baseInfo/BaseInfo'
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      show: false,
      list: []
    }
  },
  components: {
    BaseInfo
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    handleSearch () {
      this.list = [{a: 1, b: 2}, {a: 1, b: 2}]
    },
    handleClick () {
      this.$router.push('/info/1')
    }
  },
  watch: {
    keyword () {
      if (this.keyword.trim().length > 0) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.search
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #eee
    .header
        margin-top .1rem
        height .86rem
        display flex
        align-items center
        .left
            padding-left .2rem
            .back-icon
                font-size .5rem
        .text
            flex 1
            margin-right .4rem
            line-height .66rem
            margin-left .2rem
            background #eee
            padding-left .2rem
            border-bottom solid .02rem gray
    .warp
        background #fff
        position absolute
        top .96rem
        bottom 0
        left 0
        right 0
        .searchPlan
            flex 1
            margin 0 .4rem
            border-bottom solid .02rem gray
            padding .2rem 0
            height 1rem
            .iconfont
                width 1rem
                height 1rem
                float left
                font-size .8rem
                background green
                text-align center
                line-height 1rem
                color #fff
            .description
                float left
                margin-left .2rem
                text-align center
                line-height 1rem
                .search-icon
                    font-size .3rem
                .keyword
                    color green
        // .info >>> .star
        //     display none
</style>
