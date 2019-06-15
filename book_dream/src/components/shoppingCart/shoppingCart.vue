<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text
      right-text
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
    <div style="height:46px"></div>
    <div style="height:200px;background-color:white">
        <van-row>
  <van-col span="3"><van-checkbox style="" v-model="checked">复选框</van-checkbox></van-col>
  <van-col span="31">span: 8</van-col>
</van-row>

        
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            checked:true
        }
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


