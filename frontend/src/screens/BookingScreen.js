import React from 'react'
import Calendar from '../components/calendar/Calender'
import { useState } from 'react';
import moment from 'moment'
import BookingForm from '../components/BookingForm'


const BookingScreen = () => {

    const [value, setValue] = useState(moment())
    
    return (
        <div>
            <Calendar value={value} onChange={setValue} />
            <BookingForm value={value} />
        </div>
    )
}

export default BookingScreen
