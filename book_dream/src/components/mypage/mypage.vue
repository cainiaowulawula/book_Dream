<template>
  <div>
    <div style="height:230px;background-color:#fb404f">
      <div style="height:50px"></div>
      <img
        style="height:100px;width:100px;border-radius:100px;display:flex;justify-content:center;margin:auto;"
        src="../../assets/images/t2.jpeg"
        alt
      >
      <p class="textName">Mr.shangbiying</p>
      <p class="dengji">LV.小学生</p>
    </div>
    <div style="margin-top:10px">
      <div style="height:50px;background-color:white">
        <van-row>
          <van-col span="4">
            <img
              style="height:30px;width:30px;margin:10px 0 0 20px;float:left"
              src="../../assets/images/余额.png"
              alt
            >
          </van-col>
          <van-col span="20">
            <div style="height:15px"></div>
            <div style="margin-left:10px;text-align:left">账户余额</div>
          </van-col>
        </van-row>
      </div>
      <div class="van-hairline--top"></div>
      <div style="height:50px;background-color:white">
        <van-row>
          <van-col span="4">
            <img
              style="height:30px;margin:10px 0 0 20px;float:left"
              src="../../assets/images/记录.png"
              alt
            >
          </van-col>
          <van-col span="20">
            <div style="height:15px"></div>
            <div style="margin-left:10px;text-align:left">购买记录</div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="van-hairline--top"></div>
    <div style="height:50px;background-color:white">
      <van-row>
        <van-col span="4">
          <img
            style="height:30px;margin:10px 0 0 20px;float:left"
            src="../../assets/images/收藏.png"
            alt
          >
        </van-col>
        <van-col span="20">
          <div style="height:15px"></div>
          <div style="margin-left:10px;text-align:left">我的收藏</div>
        </van-col>
      </van-row>
    </div>
    <div style="margin-top:10px">
      <van-cell title="设置"/>
      <van-cell title="信息"/>
      <van-cell title="帮助"/>
    </div>
    <div style="margin-bottom:60px"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.dengji {
  text-align: center;
  color: white;
  font-size: 14px;
  margin-top: 15px;
  font-family: "幼圆";
}
.textName {
  text-align: center;
  color: white;
  font-size: 14px;
  margin-top: 15px;
}
</style>

