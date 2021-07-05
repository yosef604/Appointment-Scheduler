import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { adminSetHoursAction } from '../actions/adminActions'

const AdminSetHoursScreen = ({history, location }) => {

    const [date, setDate] = useState('')
    const [startDay, setStartDay] = useState('')
    const [endDay, setEndDay] = useState('')


    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const adminSetHours = useSelector(state => state.adminSetHours)
    const {error, loading, success} = adminSetHours

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
      if (!userInfo || !userInfo.isAdmin) {
        history.push(redirect)
      } 
      if (success){
        console.log('success')
      }
    }, [history, userInfo, redirect, success])


    const submitHandler = (e) => {
       e.preventDefault()
       dispatch(adminSetHoursAction(date, startDay, endDay, userInfo.token))
    }
    
    return (
        <>
        {success && <Message variant='success'>Hours Updated!</Message>}
        <FormContainer>
          <h1>Set Hours</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='date'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='Put the date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='startday'>
              <Form.Label>Start Day</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter start day'
                value={startDay}
                onChange={(e) => setStartDay(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Form.Group controlId='endday'>
              <Form.Label>End day</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter end day'
                value={endDay}
                onChange={(e) => setEndDay(e.target.value)}
              ></Form.Control>
            </Form.Group>
    
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </FormContainer>
        </>
      )
}

export default AdminSetHoursScreen