<template>
    <div class="login">
        <div class="login-warp">
            <div class="row">
                <div>
                    账号：
                </div>
                <div class="text">
                    <input class="inp" type="text" v-model="username" name="" id="">
                </div>
            </div>
            <div class="row">
                <div>
                    密码：
                </div>
                <div class="text">
                    <input class="inp" v-model="password" type="text" name="" id="">
                </div>
            </div>
        </div>
        <div class="active">
            <div class="submit" @click="handleLogin">登录</div>
            <router-link tag="div" to="/regist" class="regist">没有账号?<span class="line">去注册</span></router-link>
        </div>
    </div>
</template>

<script>
import axois from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      const self = this
      console.log('提交数据')
      const d = {user_name: this.username, password: this.password}
      axois.post('/api/login', d).then(function (data) {
        if (data.status === 200) {
          window.localStorage.setItem('me', d.user_name)
          window.localStorage.setItem('id', data.data._id)
          self.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
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
    .login-warp
        width 70%
        height 2rem
        display flex
        flex-direction column
        align-items center
        .row
            display flex
            line-height 1rem
            font-size .35rem
            .text
                padding-left .1rem
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
        .regist
            display flex
            justify-content space-between
            margin-left .4rem
            color #fff
            background green
            padding 0 .2rem
            border-radius .1rem
            .line
                text-decoration underline

</style>
