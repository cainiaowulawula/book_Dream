<template>
  <div class="inbody">
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#fb404f">
      <van-tabbar-item @click="shudian" icon="shop-o">
       书店
      </van-tabbar-item>
      <van-tabbar-item @click="bookcase" icon="home-o" dot>
       书架
      </van-tabbar-item>
      <van-tabbar-item @click="shoppingCart" icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item @click="wode" icon="friends-o" info="20">
        我的
         <!-- <router-link tag="span" to="../../index/mypage">我的</router-link> -->
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      searchValue: "",
      activeOne: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("按钮");
    },
    shudian(){
      console.log('123'),
      this.$router.push({path:'/index'})
    },
    wode(){
      this.$router.push({path:'/index/mypage'})
    },
    bookcase(){
      this.$router.push({path:'/index/bookcase'})
    },
    shoppingCart(){
      this.$router.push({path:'/index/shoppingCart'})
    }
  }
};
</script>
<style scoped>
</style>

