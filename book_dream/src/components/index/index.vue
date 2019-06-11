<template>
  <div class="inbody">
    <div >
    <van-search fixed=true  placeholder="请输入搜索关键词" type="flex" shape="round" v-model="searchValue"/>
    <van-tabs v-model="activeOne">
      <van-tab title="推荐">
         <router-view name="details"></router-view>
      </van-tab>
      <van-tab title="限免">内容 2</van-tab>
      <van-tab title="排行">内容 3</van-tab>
      <van-tab title="分类">内容 4</van-tab>
    </van-tabs>
    </div>
    <van-tabbar  v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
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
    }
  }
};
</script>
<style scoped>
</style>

