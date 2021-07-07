import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userBookingAction } from '../actions/usersActions'
import Message from './Message'
import Loader from './Loader'


const UserForm = ({value, history}) => {

  const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [hour, setHour] = useState('')
    const [count, setCount] = useState('')
    const [phone, setPhone] = useState('')
    const [day, setDay] = useState('')
    const date = value.format('DD-MM-YYYY')
    const [hoursList, setHoursList] = useState([])
    const [showAHours, setShowAHours] = useState(false)
    const [message, setMessage] = useState(null)

    const userBooking = useSelector(state => state.userBooking)
    const {loading, error, success:bookSuccess} = userBooking

    useEffect(() => {

      const fetchHours = async () => {
        const {data} = await axios.get(`/api/hours/${value.format('DD-MM-YYYY')}`)
        setHoursList(data)
        setHour(data[0])
        setDay(value.format('dddd'))
     }

     fetchHours()

     if (bookSuccess){
      history.push('/book/success')
     }
       
    }, [bookSuccess, value, history])

    


    const submitHandler = async (e) => {
        e.preventDefault()
        if ( hour === false) {
          setMessage('Hour already booked')
        }
        else if ( count < 1 || count > 10) {
          setMessage('Count must be between 1 to 10')
        }
        else {
          const userInfo = {
            name, hour, count, phone, date, day
        }
          dispatch(userBookingAction(userInfo))
          setShowAHours(false)
          setMessage(null)
        }

    }



    return (
        <div className='booking-form'>
          {loading && <Loader />}
          {error && <Message variant='danger'>{error}</Message>}
          {message && <Message variant='danger'>{message}</Message>}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Button onClick={() => setShowAHours(true)}>Choose Hour</Button>
              </Form.Group>

              <Form.Group controlId='hour'>
                <h3>hour</h3>
                <p>Hour: {hour}</p>
              </Form.Group>

              <Form.Group controlId='day'>
                <h3>day</h3>
                <p>day: {day}</p>
              </Form.Group>

              <Form.Group controlId='count'>
                <Form.Label>count</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Enter count'
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='date'>
                <h3>date</h3>
                <span><p>{date}</p></span>
              </Form.Group>

              <Form.Group controlId='phone'>
                <Form.Label>phone</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Submit
              </Button>
            </Form>

         {showAHours && (
           <div className='hoursDisplay'>
           {hoursList.map((e, i) => (
               e ? <button className='btn un-booked' onClick={() => setHour(e)} key={i}>{e}</button> : <button className='btn booked' key={i}>Booked</button>
           ))}
       </div>
         )}
        </div>
    )
}

export default UserForm
