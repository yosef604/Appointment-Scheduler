export const timeSelection = (startHour = 7, endHour = 13) => {
    const hourTime = []
    for (let i = startHour; i <= endHour; i += 0.25) {

        let hours
        let minutes
        let fullHour = i.toString().split('.')

        if (fullHour[0].length === 1){
            hours = '0' + fullHour[0]
        } else {
            hours = fullHour[0]
        }

        if (!fullHour[1]){
            minutes = '00'
        } else {
            minutes = fullHour[1]
        }
    
    
        if (minutes === '25') {hourTime.push({hourName: `${hours}:15`})}
        if (minutes === '5') {hourTime.push({hourName: `${hours}:30`})}
        if (minutes === '75') {hourTime.push({hourName: `${hours}:45`})}
        if (minutes === '00') {hourTime.push({hourName: `${hours}:00`})}
        
    }
    return hourTime
}

