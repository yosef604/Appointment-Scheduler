import React from 'react'
import Calendar from '../components/calendar/Calender'
import { useState } from 'react';
import moment from 'moment'
import BookingForm from '../components/BookingForm'
import { Row, Col } from 'react-bootstrap';


const BookingScreen = ({history}) => {

    const [value, setValue] = useState(moment())
    
    return (
        <Row>
            <Col md={4}><Calendar value={value} onChange={setValue} /></Col>
            <Col md={8}><BookingForm value={value} history={history} /></Col>
        </Row>
    )
}

export default BookingScreen
