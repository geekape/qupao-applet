<template lang="pug">
    .index
      button(@tap="openLocation") 打开位置
      map
      .m-card
        .m-card__title 0.00
        .m-card__desc 今日公里数
        i.iconfont.icon-videofill.m-card__btn
</template>

<script>

export default {
  mpType: 'page',
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    openLocation() {
      wx.getLocation({
         success: function(res){
           console.log(res)
         }  
      })
    }
  },

  created () {
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
  position: absolute;
  background: #fff;
  left: 0;
  bottom: 20px;
  right: 0;
  margin: auto;
  flex-direction: column;
  width: 325px;
  height: 325px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);

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
  }
}

map {
  width: 100vw;
  height: 100vh;
}

</style>
