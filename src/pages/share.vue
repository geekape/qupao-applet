<template lang="pug">
    .run
      maps
      .run-info
        .run-info__row
          .run-info__km.run-info__item {{runKm}}
            span.km.f-font-xs 公里
          .run-info__item.f-text-aglin_r
            .run-info__name {{userInfo.nickName}}
            .run-info__time.f-font-xs {{selfTime}}
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
        .run-info__row.run-info__row_btn
          a.u-btn.u-btn_primary.u-btn_lg(href="./me" open-type="switchTab") 分享战绩
      
</template>

<script>
import maps from '@/components/maps'
export default {
  mpType: 'page',
  data () {
    return {
      runKm: '',
      runTime: '',
      runSpeed: '',
      runCal: '',
      userInfo: {}
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
    },
    selfTime () {
      let time = new Date()
      let [month, day, hours, minutes] = [time.getMonth()+1, time.getDate(), time.getHours(), time.getMinutes()]
      return `${month}月${day}日 ${hours<10 ? '0'+hours : hours}:${minutes<10 ? '0'+minutes : minutes}`
    }
  },

  methods: {
    // 暂停跑步
    pauseRun () {
      this.isPause = true
    },
    // 静音
    mute () {
      this.soundState != this.soundState
    },
    getData() {
      let data = this.$store.state.runInfo;
      console.log(data)
      this.runKm = data.runKm 
      this.runTime = data.runTime 
      this.runSpeed = data.runSpeed 
      this.runCal = data.runCal

      this.userInfo = wx.getStorageSync('userInfo')
    }
  },

  onLoad () {
    this.getData()
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
  position: relative;
  &__km {
    font-size: 54px;
    .km {margin-left: 5px;}
  }

  &__row {
    display: flex;
    
    justify-content: center;
    align-items: center;
    &_text {
      padding: 10px 0;
      margin-bottom: 20px;
    }
    // 分享按钮
    &_btn {
      position: absolute;
      bottom: 0;
      left: 15px;
      right: 15px;
      padding: 15px 0;
    }
  }
  &__name {
    font-size: 14px;
    color: #666;
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
.f-font-xs {
  color: $gray;
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
  margin-right: 30px;
}


</style>
