<template>
    <div class="header">
       <div class="left">
            <router-link tag="div" to="/" class="iconfont back-icon">&#xe605;</router-link>
        </div>
        <div class="text">{{headername}}</div>
        <div class="right">
            <div class="iconfont more-icon" >&#xe637;</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'hearder',
  props: {
    headername: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header
    z-index: 2;
    position relative
    height: 0.86rem;
    background: $bgColor;
    line-height: 0.86rem;
    font-size: 0.3rem;
    color: #fff;
    .left
        float: left;
        margin-left: 0.2rem;

        .back-icon
            font-size: 0.4rem;
    .text
        float: left;
        margin-left: 0.2rem;
    .right
        float: right;
        margin-right: 0.2rem;
        .more-icon
            font-size: 0.4rem;
</style>
