<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-tag': '/static/vant-weapp/dist/tag/index'
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="scss">
@import "~styles/style.scss";
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
page {
  height: 100%;
}
</style>
