<template lang="pug">
    .index
      map#map(:longitude="longitude" :latitude="latitude" :markers="markers" show-compass :circles="circles")
      cover-view.m-card
        cover-view.m-card__title 0.00
        cover-view.m-card__desc 今日公里数
        cover-image(src="/static/images/icon-play.png" @click="goCountDown")

      runCountDown(:isShow="isShow" :countDownNum="countDownNum")
      popup(:isPopupShow="isPopupShow")
</template>

<script>
import runCountDown from "@/components/runCountDown";
import popup from "@/components/popup";
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
      setTimeout(function() {
        if (_this.countDownNum > 1) {
          _this.countDownNum--;
          _this.goCountDown();
        } else {
          wx.redirectTo({ url: "./run" });
        }
      }, 1000);
    }
  },

  created() {
    const _this = this;
    
    // 用户信息
    const userInfo = wx.getStorageSync('userInfo')
    if(!userInfo) {
      console.log('不为真111')
      this.isPopupShow = true
    }
    
    wx.getSetting({
      success(res) {
        console.log(res.authSetting);
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    });

    wx.getLocation({
      type: "wgs84",
      success: function(res) {
        let markers = {
          latitude: res.latitude,
          longitude: res.longitude,
          iconPath: "/static/images/icon-marker.png",
          width: 30,
          height: 30
        };
        _this.latitude = res.latitude;
        _this.longitude = res.longitude;
        _this.markers.push(markers);
      }
    });
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
  background: #fff;

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
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
</style>
