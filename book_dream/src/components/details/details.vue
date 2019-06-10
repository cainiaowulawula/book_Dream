<template>
  <div class="details">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-row>
      <van-col span="9">span: 8</van-col>
      <van-col span="15">span: 8</van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  methods: {
    onChange(index) {
      this.$toast("当前 Swipe 索引：" + index);
    }
  }
};
</script>
<style>
.van-swipe {
  background-color: #66c6f2;
  height: 150px;
  text-align: center;
  color: white;
}
.van-swipe-item {
  margin-top: 65px;
}
body {
  background-color: #f2f3f5;
}
.van-col{
    border: 1px solid #66c6f2;
    background-color: aquamarine;
    height: 50px;
}
</style>

