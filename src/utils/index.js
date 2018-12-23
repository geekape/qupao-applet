function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
}

/**
 * 处理时间格式为00：00：00
 * 
 */
function formatTimeHms(number) {
    let h = parseInt(number / 3600)
    let m = parseInt(number / 60)
    let s = parseInt(number % 60)

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    return `${h}:${m}:${s}`
}



export {
    formatTime,
    formatTimeHms
}