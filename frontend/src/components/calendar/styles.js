const isSelected = (day, value) => {
    return value.isSame(day, 'day')
}

export const isBeforeToday = (day) => {
    return day.isBefore(new Date(), 'day')
}

const isToday = (day) => {
    return day.isSame(new Date(), 'day')
}

export const daysStyles = (day, value) => {
    if(isBeforeToday(day)) return 'before'
    if(isSelected(day, value)) return 'selected'
    if(isToday(day)) return 'today'

    return ''
}