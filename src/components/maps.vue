<template lang="pug">
  map#map.maps(:markers="markers" show-compass :circles="circles")
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

  onLoad () {
    const _this = this
    wx.getLocation({
      type: 'wgs84',
        success: function(res){
          let latitude = res.latitude
          let longitude = res.longitude

          _this.latitude = latitude
          _this.longitude = longitude
          // _this.circles.push({
          //   latitude: latitude,
          //   longitude: longitude,
          //   radius: 50,
          //   color: '#fff',
          //   fillColor: '#FF7321',
          //   strokeWidth: 2
          // })
          _this.markers.push({
            latitude: latitude,
            longitude: longitude,
            name: 'T.I.T 创意园'

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
