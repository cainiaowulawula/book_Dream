<template>
  <div style="margin-bottom:60px">
    <van-nav-bar
      title="书架"
      left-text
      right-text
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-dropdown-menu style="margin-top:45px">
      <van-dropdown-item v-model="value" :options="option"/>
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮"/>
        <van-switch-cell v-model="switch2" title="团购"/>
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
     <router-view></router-view>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #fb404f;
}
.van-nav-bar__title {
  color: white;
}
</style>


