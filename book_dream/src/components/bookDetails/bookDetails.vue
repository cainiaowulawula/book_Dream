<template>
  <div style="background-color:rgb(238, 241, 245);min-height:600px">
    <div>
      <van-nav-bar
        title="商品详情"
        left-text="返回"
        right-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <router-view></router-view>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"/>
        <van-goods-action-icon info="5" icon="cart-o" text="购物车"/>
        <van-goods-action-icon icon="shop-o" text="店铺"/>
        <van-goods-action-button type="warning"  @click="showBase = true" text="加入购物车"/>
        <van-goods-action-button type="danger"  @click="showBase = true" icon="cart-o" text="立即购买"/>
      </van-goods-action>
    </div>
    <div class="sku-container">
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :initial-sku="initialSku" 
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator"  
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
      </div> 
  </div>
</template>

<script>
import skuData from '../../assets/js/data.js';
export default {
   data() {
    this.skuData = skuData;
    return {
      skuData:skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3
      },
      customSkuValidator: () => '请选择xxx!', 
      }
      
    },
  methods: {
    onClickLeft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("按钮");
    },
    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data));
      console.log(JSON.stringify(data))
    },

    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data));
    }, 
  }
};
</script>
<style >

</style>


