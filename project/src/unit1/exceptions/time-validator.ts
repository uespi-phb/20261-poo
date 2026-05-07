
function timeValidator(time: string): void {
    const regexValidator = /^(\d\d):(\d\d)$/
    const match = regexValidator.exec(time)

    if (!match) {
        throw new Error(`Invalid time format: "${time}"`)
    }
    const hour = parseInt(match[0])
    if (hour < 0 || hour > 23) {
        throw new Error(`Invalid time hour: "${time}"`)
    }
    const minute = parseInt(match[1])
    if (minute < 0 || minute > 59) {
        throw new Error(`Invalid time minute: "${time}"`)
    }
}

function timeToMinute(time: string): number {
    const data = time.split(':')
    return parseInt(data[0]) * 60 + parseInt(data[1])
}

function timeDiffInMinutes(timeBegin: string, timeEnd: string): number {
    const timeBeginInMin = timeToMinute(timeBegin)
    const timeEndInMin = timeToMinute(timeEnd)

    /*
    let enlapsedTime = 0
    if (timeBeginInMin <= timeEndInMin) {
        enlapsedTime = timeEndInMin - timeBeginInMin
    } else {
        enlapsedTime = timeBeginInMin - timeEndInMin
    }
    return enlapsedTime
    */

    return (timeBeginInMin <= timeEndInMin)
        ? timeEndInMin - timeBeginInMin
        : timeBeginInMin - timeEndInMin
}