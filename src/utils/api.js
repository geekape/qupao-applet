var plugin = requirePlugin("WechatSI")


const _jitang = [
    "运动是一切生命的源泉",
    "你只有非常努力，才能看起来毫不费力",
    "我荒废的今日，正是昨天殒身之人祈求的明天",
    "如果你坚持了自己的梦想、全世界都会为你让路！",
    "如果你要放弃，请悄悄的离开，因为这里没有欢送的掌声！",
    "如果非要在热爱健身加个期限，我希望是：一万年！",
    "健身到了一定境界，何需再看脸！",
    "有一天在他们面前脱下上衣，给他们无声的大耳光。",
    "全民健身，利国利民，功在当代，利在千秋。",
    "梦想、绝对是血钻石！只有从眼泪和血汗中诞生！",
    "既然没有俊美的外表，那就努力去拥有野兽般的身体吧！",
    "好身材只留给有毅力的人！"
]


function _playAudio(id) {
    let backgroundAudioManager = wx.getBackgroundAudioManager()
    let audioUrl = `https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia?filename=${id}_${id}&filekey=492778834&source=miniapp_plugin`

    backgroundAudioManager.src = audioUrl
}


const api = {
    playAudio(text) {
        plugin.textToSpeech({
            lang: "zh_CN",
            tts: true,
            content: text,
            success: function(res) {
                console.log("succ tts", res)
                let backgroundAudioManager = wx.getBackgroundAudioManager()
                backgroundAudioManager.src = res.filename
            },
            fail: function(res) {
                console.log("fail tts", res)
            }

        })
    },
    // 倒计时
    playCountDown(number) {
        if (number == 3) _playAudio('219253119821676548')
        else if (number == 2) _playAudio('218800168273379333')
        else _playAudio('219253132706578436')
    },
    // 开始跑步
    playStartRun() {
        _playAudio('363376369551147012')
    },
    // 暂停跑步
    playStopRun() {
        _playAudio('433006001400643587')
    },
    // 结束跑步
    playEndRun() {
        _playAudio('435967995527692292')
    },
    // 恢复跑步
    playRenewRun() {
        _playAudio('435974979144515588')
    },


    playRandom() {
        let text = _jitang[parseInt(Math.random() * _jitang.length)]
        this.playAudio(text)
    }
}

export {
    api
}