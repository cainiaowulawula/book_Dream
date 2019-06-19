<template>
  <div>
    <div>
      <van-swipe
        :autoplay="3000"
        style="height:180px;background-color:blue"
        indicator-color="white"
      >
        <van-swipe-item>
          <img style="height:180px;width:100%" src="../../assets/images/b1.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img style="height:180px;width:100%" src="../../assets/images/b2.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img style="height:180px;width:100%" src="../../assets/images/b1.jpg" alt>
        </van-swipe-item>
        <van-swipe-item>
          <img style="height:180px;width:100%" src="../../assets/images/b2.jpg" alt>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="margin-left:10px;margin-right:10px">
      <p
        style="margin-top:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;font-size:15px;font-weight:800"
      >格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的</p>
      <div style="margin-top:5px;margin-left:5px">
        <div style="float:left;position:relative;">
          <div
            style="text-align:left;color:red;float:left;font-size:10px;position:absolute; bottom:0; left:0;"
          >￥</div>
          <p style="text-align:left;color:red;margin-left:10px;font-size:18px">12.35</p>
        </div>
        <div>
          <van-tag color="#fb404f" style="margin-left:10px;margin-top:-3px" plain>亏本冲销量</van-tag>
        </div>
      </div>
      <div
        id="main"
        style="
            height: 30px;
            width:100%;
            display: -webkit-flex; /* Safari */
            -webkit-justify-content: space-around; /* Safari 6.1+ */
            display: flex;
            justify-content: space-between;
            margin-top:10px"
      >
        <div style="font-size:12px;color:gray;margin-top:3px">快递:0.00</div>
        <div style="font-size:12px;color:gray;margin-top:3px">月售:13562</div>
        <div style="font-size:12px;color:gray;margin-top:3px">陕西·西安</div>
      </div>
    </div>
    <div>
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        is-link="true"
        @click="showList = true"
      />
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <van-cell title="购买可得34积分" @click="gojifen" is-link/>
      <van-cell title="产品参数" @click="gojifen" is-link style="margin-top:10px"/>
    </div>
    <div>
      <div
        style=" height: 30px;
            width:100%;
            display: -webkit-flex; /* Safari */
            -webkit-justify-content: space-around; /* Safari 6.1+ */
            display: flex;
            justify-content: center;
            margin-top:10px;color:gray"
      >
        <van-icon name="chat-o" style size="20px"/>&nbsp;&nbsp;&nbsp;评价
      </div>
      <div style="height:275px;background-color:white;padding-left:10px;padding-right:10px">
        <p style="padding-top:10px;font-size:10px;font-weight:600">宝贝评价（23）</p>
        <div
          id="main"
          style="
            width:100%;
            display: -webkit-flex; /* Safari */
            -webkit-justify-content: space-around; /* Safari 6.1+ */
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top:10px"
        >
          <div style="height: 25px;margin-top:10px;margin-right:10px">
            <van-tag
              round
              color="rgb(253, 198, 198)"
              type="danger"
              style="border-radius:30px"
              size="large"
            >内容很不错(12)</van-tag>
          </div>
          <div style="height: 25px;margin-top:10px;margin-right:10px">
            <van-tag
              round
              color="rgb(222, 217, 217)"
              type="danger"
              style="border-radius:30px"
              size="large"
            >服务不错(12)</van-tag>
          </div>
          <div style="height: 25px;margin-top:10px;margin-right:10px">
            <van-tag
              round
              color="rgb(253, 218, 198)"
              type="danger"
              style="border-radius:30px"
              size="large"
            >质量很好(12)</van-tag>
          </div>
          <div style="height: 25px;margin-top:10px;margin-right:10px">
            <van-tag
              round
              color="rgb(222, 217, 217)"
              type="danger"
              style="border-radius:30px"
              size="large"
            >质量很好(12)</van-tag>
          </div>
        </div>
        <div>
          <div class="b_name">
            <img
              style="height:30px;width:30px;border-radius:50px;float:left"
              src="../../assets/images/t1.jpg"
              alt
            >
            <span style="margin-left:10px">Jack</span>
            <van-rate v-model="value" allow-half void-icon="star" style="margin-left:10px" color="#f44" size="15px" void-color="#eee"/>
          </div>
          <div style="float:left">
              <p style="font-size:14px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">这本书怎么折磨好看，这本书怎么折磨好看，这本书怎么折磨好看，这本书怎么折磨好看，这本书怎么折磨好看这本书怎么折磨好看</p>
            <div style="color:gray;font-size:10px;margin-top:10px;float:left;margin-right:10px">2017-12-24
                
            </div>
            <div style="color:gray;font-size:10px;margin-top:8px; ">
                <div style=""><span>书名:</span>安徒生童话</div>
            </div>
          </div>
        </div>
        <div style="float:left;width:100%; display: -webkit-flex; /* Safari */
    -webkit-justify-content: space-around; /* Safari 6.1+ */
    display: flex;
    justify-content: space-around;/* 水平居中 */;padding-top:10px">
             <van-button round plain type="danger" size="small" style="width:50%;height:20%" @click="evaluate" >查看全部评价</van-button>
        </div>
       
      </div>
      
    </div>
    <div>
      <div
        style=" height: 30px;
            width:100%;
            display: -webkit-flex; /* Safari */
            -webkit-justify-content: space-around; /* Safari 6.1+ */
            display: flex;
            justify-content: center;
            margin-top:10px;color:gray"
      >
        <van-icon name="chat-o" style size="20px"/>&nbsp;&nbsp;&nbsp;商品展示
      </div>
      <img src="../../assets/images/a2.jpg" style="width:100%" alt>
      <img src="../../assets/images/a1.jpg" style="width:100%" alt>
    </div>
    <div style="height:55px"></div>
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  data() {
    return {
        value: 2.5,
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    gojifen() {
      this.$toast("购买可获得34积分");
    },
    evaluate(){
        this.$toast("点击了查看评价");
    }
  }
};
</script>
<style scode>
.b_name {
  display: -webkit-flex;
  -webkit-align-items: center; /* Safari 7.0+ */
  display: flex;
  align-items: center;
  margin-left: 5px;
  float: left;
  margin-bottom: 15px;
  margin-top: 10px;
}
</style>


