<template lang="pug">
  .me
    .me-card
      .me-card__hd
        img.me-card__img()
        me-card__name Geekape
      .me-card__ft
        .me-card__ft-item
          .me-card__subtitle 日均步数
          .me-card__number 4567
        .me-card__ft-item
          .me-card__subtitle 总公里数
          .me-card__number 670
        .me-card__ft-item
          .me-card__subtitle 累计天数
          .me-card__number 1230
</template>

<script>

export default {

  computed: {
    
  },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/style.scss';
  .me-card {
    margin: 15px;
    color: #fff;
    background:$primary-gradient;
    border-radius: 6px;
    box-shadow: 0 0 5px $primary-color;
    padding: 20px 15px;
    box-sizing: border-box;
    height: 190px;
    position: relative;
    // 头部
    &__hd {
      display: flex;
      align-items: center;
    }
    // 头像
    &__img {
      width: 58px;
      height: 58px;
      background: $gray;
      border-radius: 50%;
      margin-right: 15px;
    }

    &__ft {
      display: flex;
      position: absolute;
      bottom: 20px;
    }
    &__ft-item {
      flex: 1;
      text-align: center;
    }

    &__subtitle {
      font-size: 12px;
    }
    &__number {
      font-size: 24px;
    }
  }
</style>
