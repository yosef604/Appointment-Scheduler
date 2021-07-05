import React, { useEffect, useState } from 'react'
import { buildCalendar } from './build'
import { daysStyles, isBeforeToday } from './styles'
import CalendarHeader from './header'
import './style.css'
import {calendarManipulate} from './calendarManipulate'

const Calender = ({value, onChange}) => {
    
    const [calendar, setCalendar] = useState([])

    useEffect(() => {  
        setCalendar(buildCalendar(value))
    }, [value])

    calendarManipulate()

    
    return (
        <div className='calendar'>
            <CalendarHeader value={value} setValue={onChange} />
            <div className='body'>
                <div className='day-names'>
                    {['s', 'm', 't', 'w', 't', 'f', 's'].map((d, i) => (
                        <div key={i} className='week'>{d}</div>
                    ))}
                </div>
                {calendar.map((week, index) => 
                    <div key={index + 10}>
                        {week.map((day, i) => <div 
                        key={i + 500} className='day' onClick={() => !isBeforeToday(day) && onChange(day)}>
                        <div className={daysStyles(day, value)}>
                            {day.format('D')}
                        </div>
                    </div>)}
                </div>)}
            </div>
        </div>
    )
}

export default Calender
