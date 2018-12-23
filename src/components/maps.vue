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
          let latitude = res.latitude
          let longitude = res.longitude

          _this.latitude = latitude
          _this.longitude = longitude
          _this.circles.push({
            latitude: latitude,
            longitude: longitude,
            radius: 50,
            color: '#fff',
            fillColor: '#FF7321',
            strokeWidth: 2
          })
          _this.markers.push({
            latitude: latitude,
            longitude: longitude,
            iconPath: '/static/images/icon-marker.png',
            width: 20,
            height: 20

          })
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
