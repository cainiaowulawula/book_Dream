<template>
  <div style="margin-bottom:60px;overflow:auto">
    
    <div style="height:280px">
      <van-row type="flex" justify="space-around" style="margin-top:10px">
       
        <van-col span="11">
           <router-link tag="span"
                    to='../../bookDetails'>
          <div style="height:280px;background-color:white;border-radius:8px">
            <img style src="../../assets/images/a4.jpg" alt>
            <p
              style="margin-top:5px;margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:14px"
            >格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的</p>
            <van-rate style="text-align:left;margin-left:5px" v-model="value" readonly/>
            <p
              style=";margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:12px;color:gray"
            >安徒生</p>
            <div><van-tag color="#f2826a" style="margin-top:5px;margin-left:5px;text-align:left" plain>满50减10元</van-tag></div>
            <div style="margin-top:10px;margin-left:5px">
              <div style="float:left;position:relative;">
                <div
                  style="text-align:left;color:red;float:left;font-size:10px;position:absolute; bottom:0; left:0;"
                >￥</div>
                <p style="text-align:left;color:red;margin-left:10px">12.35</p>
              </div>
              <div style="float:right;font-size:12px;color:gray;margin-top:3px;margin-right:5px">陕西·西安</div>
            </div>
          </div>
          </router-link>
        </van-col>
         
        <van-col span="11">
          <div style="height:280px;background-color:white;border-radius:8px">
            <img style src="../../assets/images/a3.jpg" alt>
            <p
              style="margin-top:5px;margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:14px"
            >格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的</p>
            <van-rate style="text-align:left;margin-left:5px" v-model="value" readonly/>
            <p
              style=";margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:12px;color:gray"
            >安徒生</p>
            <van-tag color="#f2826a" style="margin-top:5px;margin-left:5px" plain>满50减10元</van-tag>
            <div style="margin-top:10px;margin-left:5px">
              <div style="float:left;position:relative;">
                <div
                  style="text-align:left;color:red;float:left;font-size:10px;position:absolute; bottom:0; left:0;"
                >￥</div>
                <p style="text-align:left;color:red;margin-left:10px">12.35</p>
              </div>
              <div style="float:right;font-size:12px;color:gray;margin-top:3px;margin-right:5px">陕西·西安</div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div style="height:280px" >
      <van-row type="flex" justify="space-around" style="margin-top:10px">
        <van-col span="11">
         <div style="height:280px;background-color:white;border-radius:8px">
            <img style src="../../assets/images/a2.jpg" alt>
            <p
              style="margin-top:5px;margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:14px"
            >格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的</p>
            <van-rate style="text-align:left;margin-left:5px" v-model="value" readonly/>
            <p
              style=";margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:12px;color:gray"
            >安徒生</p>
            <van-tag color="#f2826a" style="margin-top:5px;margin-left:5px" plain>满50减10元</van-tag>
            <div style="margin-top:10px;margin-left:5px">
              <div style="float:left;position:relative;">
                <div
                  style="text-align:left;color:red;float:left;font-size:10px;position:absolute; bottom:0; left:0;"
                >￥</div>
                <p style="text-align:left;color:red;margin-left:10px">12.35</p>
              </div>
              <div style="float:right;font-size:12px;color:gray;margin-top:3px;margin-right:5px">陕西·西安</div>
            </div>
          </div>
        </van-col>
        <van-col span="11">
          <div style="height:280px;background-color:white;border-radius:8px">
            <img style src="../../assets/images/a1.jpg" alt>
            <p
              style="margin-top:5px;margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:14px"
            >格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的</p>
            <van-rate style="text-align:left;margin-left:5px" v-model="value" readonly/>
            <p
              style=";margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:12px;color:gray"
            >安徒生</p>
            <van-tag color="#f2826a" style="margin-top:5px;margin-left:5px" plain>满50减10元</van-tag>
            <div style="margin-top:10px;margin-left:5px;margin-borrom:60px">
              <div style="float:left;position:relative;">
                <div
                  style="text-align:left;color:red;float:left;font-size:10px;position:absolute; bottom:0; left:0;"
                >￥</div>
                <p style="text-align:left;color:red;margin-left:10px">12.35</p>
              </div>
              <div style="float:right;font-size:12px;color:gray;margin-top:3px;margin-right:5px">陕西·西安</div>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4
    };
  }
};
</script>
<style scoped>
img {
  height: 160px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.van-rate__icon {
  font-size: 10px;
}
</style>


