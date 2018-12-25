<template lang="pug">
    .run
      maps
      .run-info
        .run-info__km {{runKm}}
          span.km.f-font-xs 公里
        .run-info__row.run-info__row_text
          .run-info__item.run-info__item_time
            .run-info__title.f-font-xs  运动时间
            .run-info__number {{runTime}}
          .run-info__item
            .run-info__title.f-font-xs  配速
            .run-info__number {{runSpeed}}
          .run-info__item
            .run-info__title.f-font-xs  卡路里
            .run-info__number {{runCal}}
              span.f-font-xs 千卡
        .run-info__row
          i.iconfont.icon-unlock
          img.run-icon_pause(src="/static/images/icon-pause.png" v-show="!isPause" @click="pauseRun")
          img.run-icon_end(src="/static/images/icon-end.png" v-show="isPause" @click="endRun")
          img.run-icon_play(src="/static/images/icon-play_blue.png" v-show="isPause" @click="continueRun")
          i.iconfont(@click="mute" :class="isMute")
      
</template>

<script>
import maps from '@/components/maps'
import {formatTimeHms} from '@/utils'
import {api} from '@/utils/api'
let timers = null,number = 0

export default {
  mpType: 'page',
  data () {
    return {
      isPause: false, //是否暂停
      soundState: false, //声音状态
      runKm: '0.00',
      runTime: '00:00:00',
      runSpeed: "--",
      runCal: 0
    }
  },

  components: {
    maps
  },

  computed: {
    isMute () {
      if(this.soundState) {
        return 'icon-wusheng'
      } else {
        return 'icon-sound'
      }
    }
  },

  methods: {
    // 暂停跑步
    pauseRun () {
      api.playAudio('跑步已暂停')
      this.isPause = true
      clearInterval(timers)
    },
    // 继续跑步
    continueRun () {
      api.playAudio('跑步已恢复')
      this.isPause = false
      this.startRun()

    },
    // 静音
    mute () {
      this.soundState != this.soundState
    },
    // 结束跑步
    endRun () {
      wx.showModal({
        title: '提示',
        content: '是否结束跑步',
        success(res) {
          if (res.confirm) {
            console.log('确定')
            api.playAudio('跑步已结束，总里程9999公里，棒棒哒')
            wx.redirectTo({url: './share'})
          } else if (res.cancel) {
            console.log('取消')
          }
        }
      })
    },

    startRun() {
      const _this = this
      timers = setInterval(function() {
        number++
        _this.runTime = formatTimeHms(number)
      }, 1000)
    },
  },

  onLoad () {
    Object.assign(this, this.$options.data());
    this.startRun()
    setTimeout(function() {api.playRandom()}, 2000)
    
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/style.scss';
.run {
  background: #fff;
}
.run-info {
  padding: 0 15px;
  height: 43vh;
  &__km {
    font-size: 54px;
    text-align: center;
    .km {margin-left: 5px;}
  }

  &__row {
    display: flex;
    
    justify-content: center;
    align-items: center;
    &_text {
      padding: 10px 0;
      border-bottom: 1px solid #fbfbfb;
      margin-bottom: 20px;
    }
  }
  &__item {
    flex: 1;
    &_time {flex: 20%}
  }

  &__title {
    color: $gray;
  }

  &__number {
    font-size: 24px;
  }
}

i.iconfont {
  font-size: 24px;
  flex: 1;
}
i.icon-wusheng,
i.icon-sound {text-align: right;}


// icon

.run-icon_end,
.run-icon_play,
.run-icon_pause {
  width: 62px;
  height: 62px;
}
.run-icon_end {
  margin-right: 70px;
}


</style>
