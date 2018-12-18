<template lang="pug">
    .index
      map#map(:longitude="longitude" :latitude="latitude" :markers="markers" show-compass :circles="circles")
      cover-view.m-card
        cover-view.m-card__title 0.00
        cover-view.m-card__desc 今日公里数
        cover-image(src="/static/images/icon-marker.png")

      
</template>

<script>

export default {
  mpType: 'page',
  data () {
    return {
      latitude: null,
      longitude: null,
      circles: [],
      markers:[]
    }
  },

  components: {
  },

  methods: {
    openLocation() {
      
    }
  },

  created () {
    const _this = this
    wx.openSetting({
    success(res) {
      console.log(res.authSetting)
      // res.authSetting = {
      //   "scope.userInfo": true,
      //   "scope.userLocation": true
      // }
    }
  })
    wx.getLocation({
      type: 'wgs84',
        success: function(res){
          let markers = {
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: '/static/images/icon-eye.png'
          }
          _this.latitude = res.latitude
          _this.longitude = res.longitude
          _this.markers.push(markers)
        }  
    })
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #FF7321;
$gray: #888;
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
  background: rgba(255,255,255,.6);
  left: 0;
  bottom: 20px;
  right: 0;
  margin: auto;
  flex-direction: column;
  width: 325px;
  height: 325px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  border-radius: 6px;

  // 标题
  &__title {
    font-size: 60px;
    color: $primary-color;
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
    border-radius:70px;
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
