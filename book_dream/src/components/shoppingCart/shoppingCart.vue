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
    <div v-for="list in datalist" :key="list.id">
      <div class="van-hairline--top"></div>
      
      <div style="height:160px;background-color:white">
        <van-row>
          <van-col span="2">
            <div
              style=" height:160px
                    display: -webkit-flex;
                    display: flex;
                    -webkit-flex-wrap: wrap;
                    flex-wrap: wrap;
                    -webkit-align-content: center;
                    align-content: center;"
            >
              <van-checkbox
                style="margin-left:5px;"
                @click="onclicked(list.id,list.checked)"
                v-model="list.checked"
              ></van-checkbox>
            </div>
          </van-col>
          <van-col span="6">
            <div style="height:20px"></div>
            <img style="height:120px;width:80px" src="../../assets/images/a4.jpg" alt>
          </van-col>
          <van-col span="16">
            <div style="height:20px"></div>
            <p
              style="margin-top:5px;margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;font-size:14px"
            >{{list.name}}</p>
            <p
              style=";margin-left:5px;text-align:left;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;font-size:12px;color:gray"
            >{{list.author}}</p>
            <div>
              <div
                color="#f2826a"
                style="margin-top:5px;margin-left:5px;text-align:left;font-size:12px;color:gray;"
                plain
              >单价:{{list.money}}</div>
            </div>

            <div
              style="margin-left:5px;font-size:12px;color:gray;margin-top:3px;margin-right:5px"
            >{{list.address}}</div>
            <div style="margin-top:5px;margin-left:5px">
              <div style="float:left;position:relative;margin-top:5px">
                <div
                  style="text-align:left;color:#fb404f;float:left;font-size:10px;position:absolute; bottom:0; left:0;"
                >￥</div>
                <div
                  style="text-align:left;color:#fb404f;margin-left:10px;width:100px"
                >{{list.combined}}</div>
              </div>
              <van-stepper
                style="float:right;margin-right:10px"
                v-model="list.number"
                @change="onChange(list.number,list.id)"
                integer
              />
            </div>
          </van-col>
        </van-row>
      </div>
     
    </div>
    <div style="margin-bottom:110px"></div>

    <div>
      <van-submit-bar :price="sum" button-text="提交订单" @submit="onSubmit">
        <van-checkbox style="margin-left:5px" @click="futureGenerations" v-model="checked">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      value: 1,
      sum: 100,
      datalist: [
        {
          id: 1,
          name: "格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的",
          author: "安徒生",
          address: "陕西·西安",
          money: 12.35,
          number: 5,
          checked: true,
          combined: 61.75
        },
        {
          id: 2,
          name: "格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的",
          author: "毕加索",
          address: "上海",
          money: 19.35,
          number: 6,
          checked: false,
          combined: 116.1
        },
        {
          id: 3,
          name: "格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的",
          author: "安徒生",
          address: "云南·昆明",
          money: 13.35,
          number: 2,
          checked: true,
          combined: 26.7
        },
        {
          id: 4,
          name: "格林童话大门口拉我还记得哈很多空间啊哈阿诗丹顿所我的",
          author: "安徒生",
          address: "云南·昆明",
          money: 13.35,
          number: 2,
          checked: true,
          combined: 26.7
        }
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
    },
    onSubmit() {
      this.$toast("提交订单");
    },
    onclicked(id, value) {
      this.datalist[id - 1].checked = !value;
      if (this.checked) {
        if (this.datalist[id - 1].checked) {
          for (var i in this.datalist) {
            if (this.datalist[i].checked == false) {
              this.checked = false;
            }
          }
        } else {
          this.checked = false;
        }
      } else {
        this.checked=true;
        for (var i in this.datalist) {
          if (this.datalist[i].checked == false) {
            this.checked = false;
          }
        }
      }
      this.sums();
    },
    onChange(value, id) {
      this.datalist[id - 1].combined = (
        value * this.datalist[id - 1].money
      ).toFixed(1);
      this.sums();
    },
    futureGenerations() {
      if (!this.checked) {
        for (var i in this.datalist) {
          this.datalist[i].checked = true;
        }
        this.sums();
      } else {
        for (var i in this.datalist) {
          this.datalist[i].checked = false;
        }
        this.sum = 0;
      }
    },
    sums() {
      var newSum = 0;
      for (var em in this.datalist) {
        if (this.datalist[em].checked) {
          newSum = newSum + Number(this.datalist[em].combined);
        }
      }
      this.sum = newSum * 100;
    }
  },
  created() {
    var newSum = 0;
    for (var em in this.datalist) {
      if (this.datalist[em].checked) {
        newSum = newSum + this.datalist[em].combined;
      }
    }
    this.sum = newSum * 100;
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
.van-submit-bar {
  bottom: 50px;
}
</style>


