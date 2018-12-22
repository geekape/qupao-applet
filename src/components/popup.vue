<template lang="pug">
  cover-view.popup(v-if="isPopupShow")
    cover-view.popup-shade
    cover-view.popup-content.animated.zoomIn
      cover-image.logo(src="/static/images/logo.png")
      cover-view.name 趣跑

      cover-view.title 该小程序需要你提供以下授权，即可继续操作
      cover-view.desc.f-font-xs 获取你的公开信息（昵称/头像等）

      button.u-btn.u-btn_primary(open-type="getUserInfo" @getuserinfo="getUserInfo") 立即授权
</template>

<script>
export default {
  props: {
    isPopupShow: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    getUserInfo(e) {
      this.isPopupShow = false
      console.log(e.mp.detail.userInfo,e)
      wx.setStorageSync('userInfo', e.mp.detail.userInfo)
      
    }
  }
};
</script>

<style lang="scss" scoped>
%position-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.popup {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: block;

  &-shade {
    @extend %position-fixed;
    background: rgba(0, 0, 0, 0.6);
  }
  &-content {
    @extend %position-fixed;
    width: 305px;
    height: 375px;
    background: #fff;
    border-radius: 6px;
  }

  .logo {
    width: 88px;
    height: 88px;
    margin: 30px auto 0;
  }

  .name {
    text-align: center;
    margin: 10px 0 20px;
    font-size: 24px;
  }

  .title,
  .desc {
    margin: 0 26px;
    font-size: 14px;
  }

  .desc {
    color: #888;
    padding-left: 10px;
    margin-top: 10px;
    position: relative;
    &:before {
      content: "";
      width: 4px;
      height: 4px;
      background: #888;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: calc(50% - 3px);
    }
  }

  .u-btn {
    position: absolute;
    bottom: 15px;
    left: 15px;
    right: 15px;
  }
}
</style>
