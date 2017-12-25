<template>
  <div id="app">
    <v-header :seller="seller"></v-header>

    <div class="tab border-1px">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评价</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <div class="content">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script >
  const ERR_OK = 0

  import header from './components/header/header.vue'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = response.data
        }
      })
    },
    components: {
      'v-header': header
    },
    name: 'app'
  }
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
@import "./common/stylus/mixin.styl"
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  border-1px(rgba(7,17,27,0.1))
  .tab-item
    text-align: center
    flex: 1
    display: block
    /*text-decoration: none;*/
    font-size:14px
    color: rgb(77,85,93)
    &.active
      color:rgb(240,20,20)

</style>
