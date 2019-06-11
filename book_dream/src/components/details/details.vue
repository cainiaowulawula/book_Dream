<template>
  <div class="details" style="overflow:auto">
    <div style="height:180px;background-color:white">
      <div style="height:15px"></div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <van-row style="margin-top:5px">
      <van-col span="10" style="height:180px;border-right: 1px solid #f1f1f1;">
        <p style="color:rgb(102, 218, 210);margin-bottom:5px;margin-top:8px">新书推荐</p>
        <p style="color:grey;font-size:12px;margin-bottom:10px">新书上市，我们更快</p>
        <img
          style="overflow:hidden;height:110px;border-radius: 5px;width:auto"
          src="../../assets/images/a3.jpg"
        >
      </van-col>
      <van-col span="14">
        <van-row>
          <van-col span="24" style="height:90px;border-bottom: 1px solid #f1f1f1;">
            <van-row>
              <van-col span="15">
                <p style="margin-left:15%;text-align:left;margin-top:20px;color:rgb(247, 115, 115)">热门书单</p>
                <p style="margin-left:15%;text-align:left;margin-top:5px;color:grey;font-size:12px">每天更新，精彩不断</p>
              </van-col>
              <van-col span="9">
                <img
          style="overflow:hidden;height:70px;border-radius: 5px;width:auto;margin-top:10px;"
          src="../../assets/images/a4.jpg"
        >
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24" style="height:90px">
            <van-row>
              <van-col span="15">
                <p style="margin-left:15%;text-align:left;margin-top:20px;color:rgb(184, 221, 100)">书友推荐</p>
                <p style="margin-left:15%;text-align:left;margin-top:5px;color:grey;font-size:12px">读书会有，交流彼此</p>
              </van-col>
              <van-col span="9">
                <img
          style="overflow:hidden;height:70px;border-radius: 5px;width:auto;margin-top:10px;"
          src="../../assets/images/a1.jpg"
        >
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <div style="margin-top:5px;background-color:white;height:780px;margin-bottom:55px">
      <div style="height:60px;">
        <div>
          <div style="height:20px"></div>
          <div style="float:left;height:20px;width:4px;background-color:#fb404f;margin-left:4%;"></div>
          <div style="float:left;margin-left:10px;font-family:'幼圆';font-weight:600">店长推荐</div>
          <div
            style="float:right;margin-right:4%;margin-top:3px;font-family:'幼圆';font-size:13px;color:gray"
          >更多></div>
        </div>
      </div>
      <div>
        <van-row
          type="flex"
          justify="space-around"
          style="margin-left:0px;margin-right:0px;margin-bottom:20px"
        >
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img
              style="overflow:hidden;height:130px;border-radius: 5px;width:auto"
              src="../../assets/images/a1.jpg"
            >
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >格林童话</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >安徒生</p>
          </van-col>
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img
              style="height:130px;border-radius: 5px;width:auto"
              src="../../assets/images/a2.jpg"
            >
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >从你的全世界路过</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >邓超</p>
          </van-col>
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img
              style="height:130px;border-radius: 5px;width:auto"
              src="../../assets/images/a3.jpg"
            >
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >你是我的命运</p>
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;text-align:left;font-size:12px;color:#cccccc"
            >白石一文</p>
          </van-col>
        </van-row>
      </div>

      <div class="van-hairline--top"></div>
      <div style="height:60px;">
        <div>
          <div style="height:20px"></div>
          <div style="float:left;height:20px;width:4px;background-color:#fb404f;margin-left:4%;"></div>
          <div style="float:left;margin-left:10px;font-family:'幼圆';font-weight:600">每日推荐</div>
          <div
            style="float:right;margin-right:4%;margin-top:3px;font-family:'幼圆';font-size:13px;color:gray"
          >更多></div>
        </div>
      </div>
      <div>
        <van-row
          type="flex"
          justify="space-around"
          style="margin-left:0px;margin-right:0px;margin-bottom:20px"
        >
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img style="height:130px;border-radius: 5px;" src="../../assets/images/a4.jpg">
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >你与世界只差一个你</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >张皓宸</p>
          </van-col>
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img style="height:130px;border-radius: 5px;" src="../../assets/images/a2.jpg">
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >天真人类</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >韩今谅</p>
          </van-col>
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img style="height:130px;border-radius: 5px;" src="../../assets/images/a5.jpg">
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >你一生的故事</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >特德·姜</p>
          </van-col>
        </van-row>
      </div>

      <!--每月推荐 -->
      <div class="van-hairline--top"></div>
      <div style="height:60px;">
        <div>
          <div style="height:20px"></div>
          <div style="float:left;height:20px;width:4px;background-color:#fb404f;margin-left:4%;"></div>
          <div style="float:left;margin-left:10px;font-family:'幼圆';font-weight:600">每月推荐</div>
          <div
            style="float:right;margin-right:4%;margin-top:3px;font-family:'幼圆';font-size:13px;color:gray"
          >更多></div>
        </div>
      </div>
      <div>
        <van-row
          type="flex"
          justify="space-around"
          style="margin-left:0px;margin-right:0px;margin-bottom:20px"
        >
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img style="height:130px;border-radius: 5px;" src="../../assets/images/a5.jpg">
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >好好地吃一朵西蓝花</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >乔迦</p>
          </van-col>
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img style="height:130px;border-radius: 5px;" src="../../assets/images/a3.jpg">
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >漫长的中场休息</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >霍尔·斯</p>
          </van-col>
          <van-col span="6" style="border-radius: 5px;height:180px;">
            <img style="height:130px;border-radius: 5px;" src="../../assets/images/a1.jpg">
            <p
              style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;text-align:left;font-size:14px;height:40px"
            >天真人类</p>
            <p
              style="text-align:left;font-size:12px;color:#cccccc;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical"
            >山姆·洪恩</p>
          </van-col>
        </van-row>
      </div>
    </div>
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
.van-col {
  background-color: white;
  height: 50px;
  text-align: center;
}
</style>

