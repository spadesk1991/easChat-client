<template>
    <div class="regist">
        <div class="regist-warp">
            <div class="row">
                <div class="title">
                    账号：
                </div>
                <div class="text">
                    <input class="inp" type="text" v-model="username" name="" id="">
                </div>
            </div>
            <div class="row">
                <div class="title">
                    密码：
                </div>
                <div class="text">
                    <input class="inp" v-model="password" type="text" name="" id="">
                </div>
            </div>
            <div class="row">
                <div class="title">
                    确认密码：
                </div>
                <div class="text">
                    <input class="inp" v-model="confirmPassword" type="text" name="" id="">
                </div>
            </div>
        </div>
        <div class="active">
            <div class="submit" @click="handleRegist">注册</div>
            <div  class="back" @click="handleBack">返回</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// axios.defaults.withCredentials = true
export default {
  name: 'Regist',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleRegist () {
      const self = this
      console.log('提交数据')
      if (this.password === this.confirmPassword) {
        const d = { user_name: this.username, password: this.password }
        axios.post('/api/register', d, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }}).then(function (data) {
          if (data.status === 200) {
            window.localStorage.setItem('me', d.user_name)
            window.localStorage.setItem('id', data.data._id)
            self.$router.push('/')
          }
        })
      }
    },
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.regist
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background #eee
    background-image url(http://588ku.qiao88.com/back_pic/04/23/39/61583430b2d1976.jpg!/fw/650)
    display flex
    flex-direction column
    align-items center
    justify-content center
    .regist-warp
        width 80%
        height 3rem
        display flex
        flex-direction column
        align-items center
        .row
            display flex
            line-height 1rem
            font-size .35rem
            .title
                width 2rem
                text-align :justify
                .inp
                    border-radius .1rem
    .active
        margin-top .2rem
        display flex
        align-items center
        height 1rem
        width 70%
        justify-content center
        line-height .8rem
        height .8rem
        .submit
            color #fff
            background green
            width 30%
            text-align center
            border-radius .1rem
        decoration underline
        .back
            width 30%
            margin-left .4rem
            color #fff
            background green
            text-align center
            border-radius .1rem
</style>
