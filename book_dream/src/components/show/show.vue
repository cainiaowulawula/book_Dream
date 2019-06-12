<template>
    <div >
    <van-search fixed=true  placeholder="请输入搜索关键词" type="flex" shape="round" v-model="searchValue"/>
    <van-tabs v-model="activeOne">
      <van-tab title="推荐">
         <router-view name="details"></router-view>
      </van-tab>
      <van-tab title="排行">
        <router-view name="ranking"></router-view>
      </van-tab>
      <van-tab title="分类">内容 3</van-tab>
      <van-tab title="发现">
        <router-view name="discover"></router-view>
      </van-tab>
    </van-tabs>
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


