<template lang="pug">
  .me
    .me-box
      .me-card
        .me-card__hd
          img.me-card__img(:src="userInfo.avatarUrl")
          me-card__name {{userInfo.nickName}}
        .me-card__ft
          .me-card__ft-item
            .me-card__subtitle 日均步数
            .me-card__number {{meanStep}}
          .me-card__ft-item
            .me-card__subtitle 总公里数
            .me-card__number {{totalKm}}
          .me-card__ft-item
            .me-card__subtitle 累计天数
            .me-card__number {{totalDay}}

    .weui-cells
      a.weui-cell
        .weui-cell__hd
          img(src="/static/images/icon-record.png")
        .weui-cell__bd
          p 运动记录
        .weui-cell__ft_in-access
    .weui-cells
      a.weui-cell.weui-cell_access
        .weui-cell__hd
          img(src="/static/images/icon-setting.png")
        .weui-cell__bd
          p 设置
        .weui-cell__ft_in-access
      a.weui-cell.weui-cell_access
        .weui-cell__hd
          img(src="/static/images/icon-suggest.png")
        .weui-cell__bd
          p 投诉和建议
        .weui-cell__ft_in-access
      a.weui-cell.weui-cell_access
        .weui-cell__hd
          img(src="/static/images/icon-about.png")
        .weui-cell__bd
          p 关于
        .weui-cell__ft_in-access
</template>

<script>

export default {
  data() {
    return {
      userInfo: {},
      meanStep: 0,
      totalKm: 0,
      totalDay: 0
    }
  },

  computed: {
    
  },

  methods: {
    
  },

  onLoad() {
    this.userInfo = wx.getStorageSync('userInfo')
    wx.showTabBar({});
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/style.scss';
.me-box {
  background: #fff;
  padding: 15px 0;
}
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
      left: 0;
      right: 0;
    }
    &__ft-item {
      flex: 1;
      text-align: center;
      border-left: 1px solid #FF5E00;
      &:first-child{border: 0}
    }

    &__subtitle {
      font-size: 12px;
    }
    &__number {
      font-size: 24px;
    }
  }

  .weui-cell__hd image {
    width: 28px;
    height: 28px;
    display: block;
    margin-right: 5px;
  }

</style>
