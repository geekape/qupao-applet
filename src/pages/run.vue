<template lang="pug">
    .run
      maps
      .run-info
        .run-info__km 0.00
          span.km.f-font-xs 公里
        .run-info__row
          .run-info__item
            .run-info__title.f-font-xs  运动时间
            .run-info__number 00:45
          .run-info__item
            .run-info__title.f-font-xs  配速
            .run-info__number 5'8
          .run-info__item
            .run-info__title.f-font-xs  卡路里
            .run-info__number 180
              span.f-font-xs 千卡
          
      
</template>

<script>
import maps from '@/components/maps'
export default {
  mpType: 'page',
  data () {
    return {
      
    }
  },

  components: {
    maps
  },

  computed: {

  },

  methods: {
    
  },

  created () {
    
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/style.scss';
.run {
  background: #fff;
}
.run-info {
  padding: 15px;
  height: 40vh;
  &__km {
    font-size: 48px;
    text-align: center;
    .km {margin-left: 5px;}
  }

  &__row {
    display: flex;
    margin-top: 20px;
  }
  &__item {
    flex: 1;
  }

  &__title {
    color: $gray;
  }

  &__number {
    font-size: 24px;
  }

}

</style>
