<template lang="pug">
  map#map.maps(:longitude="longitude" :latitude="latitude" :markers="markers" show-compass :circles="circles")
</template>

<script>
export default {
  data () {
    return {
      latitude: null,
      longitude: null,
      circles: [],
      markers:[]
    }
  },
  created () {
    const _this = this
    wx.getLocation({
      type: 'wgs84',
        success: function(res){
          let markers = {
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: '/static/images/icon-marker.png',
            width: 30,
            height: 30
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
  .maps {
    width: 100%;
    min-height: 57vh;
  }
</style>
