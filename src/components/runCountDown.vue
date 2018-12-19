<template lang="pug">
  cover-view.count-down.animated.fadeInRight(v-if="isShow==true")
    cover-view.count-down__num 3
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .count-down {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #FF7321;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 80px;
  }
</style>
