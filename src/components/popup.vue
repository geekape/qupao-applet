<template lang="pug">
  cover-view.popup(v-if="isPopupShow")
    cover-view.popup-content.animated.zoomIn
      cover-image.logo(src="/static/images/logo.png")
      cover-view.name 趣跑

      cover-view.title 小程序需要你提供以下授权，即可继续操作
      cover-view.desc.f-font-xs - 获取你的公开信息（昵称/头像等）

      button.u-button(open-type="getUserInfo" @getuserinfo="getUserInfo") 立即授权
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
      const _this = this
     
      wx.getUserInfo({
        success: function (res){
            _this.$emit('closePopup')
            console.log("userInfo:"+res)
　　　　　　　//do anything
            wx.setStorageSync('userInfo', e.mp.detail.userInfo)
        },
        fail: function(err) {
          console.log('错误了',err)
        }
      })
      
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/_variable.scss';
@import '~styles/_utils.scss';
.popup {
  z-index: 999;
  width: 100%;
  height: 100%;
  display: block;
  @extend %position-fixed;
  @extend .f-xy-center;
  background: rgba(0, 0, 0, 0.6);

  &-content {
    @extend %position-fixed;
    width: 305px;
    height: 375px;
    background: #fff;
    border-radius: 6px;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .logo {
    width: 88px;
    height: 88px;
    margin: 30px auto 0;
  }

  .name {
    text-align: center;
    margin: 10px 0 20px;
    font-size: 20px;
  }

  .title,
  .desc {
    font-size: 14px;
  }

  .desc {
    color: #888;
    padding-left: 10px;
    margin-top: 10px;
    position: relative;
  }

  .u-button {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 15px;
    background: $primary-color;
    border-radius: 30px;
    color: #fff;
  }
}
</style>
