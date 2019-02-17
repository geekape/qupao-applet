<template lang="pug">
    .index
      map#map(:longitude="longitude" :latitude="latitude" show-compass :enable-zoom="false" :enable-scroll="false" show-location)
      cover-view.m-card
        cover-view.m-card__title 0.00 
        cover-view.m-card__desc 今日公里数
        cover-image(src="/static/images/icon-play.png" @click="goCountDown")

      runCountDown(:isShow="isShow" :countDownNum="countDownNum")
      popup(:isPopupShow="isPopupShow" @closePopup="isPopupShow=false")
</template>

<script>
import runCountDown from "@/components/runCountDown";
import popup from "@/components/popup";
import {api} from "@/utils/api"
var QQMapWX = require('@/utils/qqmap-wx-jssdk.js');
var qqmapsdk;

export default {
  mpType: "page",
  data() {
    return {
      latitude: null,
      longitude: null,
      circles: [],
      markers: [],
      isShow: false, // 是否显示倒计时
      isPopupShow: false, //是否显示授权弹窗
      countDownNum: 3
    };
  },

  components: {
    runCountDown,
    popup
  },

  computed: {
    // 是否显示底部tabbar
  },

  methods: {
    goCountDown() {
      const _this = this;
      this.isShow = true;
      wx.hideTabBar({});
      api.playCountDown(`${_this.countDownNum}`)
      setTimeout(function() {
        if (_this.countDownNum > 1) {
          _this.countDownNum--;
          _this.goCountDown();
        } else {
          api.playStartRun()
          wx.redirectTo({ url: "./run" });
        }
      }, 1200);
    },
    getLocation() {
      const _this = this;
      wx.getLocation({
        type: "gcj02", // 返回可以用于wx.openLocation的经纬度
        success(res) {
          let latitude = res.latitude;
          let longitude = res.longitude;
          // let markers = {
          //   latitude: latitude,
          //   longitude: longitude,
          //   iconPath: "/static/images/icon-marker.png",
          //   width: 30,
          //   height: 30
          // };
          _this.latitude = res.latitude;
          _this.longitude = res.longitude;
          // _this.markers.push(markers);
        }
      });
    }
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('map')
    this.mapCtx.moveToLocation()
  },

  onLoad() {
    Object.assign(this, this.$options.data());
    
    // 用户信息
    const userInfo = wx.getStorageSync("userInfo");
    if (!userInfo) {
      console.log("不为真111");
      this.isPopupShow = true;
    }

    wx.getSetting({
      success(res) {
        console.log(res.authSetting);
      }
    });
    this.getLocation()

  }
};
</script>

<style lang="scss" scoped>
@import "~styles/style.scss";

.g-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.index {
  position: relative;
  height: 100%;
}
.m-card {
  @extend .g-flex-center;
  position: fixed;
  background: rgba(255, 255, 255, .8);

  left: 0;
  bottom: 20px;
  right: 0;
  margin: auto;
  flex-direction: column;
  width: 300px;
  height: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  // 标题
  &__title {
    font-size: 48px;
    color: #000;
  }

  // 描述
  &__desc {
    font-size: 12px;
    color: $gray;
    margin-bottom: 40px;
  }

  // 播放
  &__btn {
    font-size: 80px;
    color: $primary-color;
    border-radius: 70px;
  }
}

map {
  width: 100vw;
  height: 100vh;
}
cover-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
