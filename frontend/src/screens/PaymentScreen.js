import React, { useState } from 'react'
import { Form, Button ,Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps'
// import { saveShippingAddress } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../app/features/slices/cartslice';

function PaymentScreen() {
    const navigate = useNavigate();
    const shippingAddress=useSelector((state)=>state.cart.shippingAdress);
    if(!shippingAddress){
        navigate('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('RazorPay')
  
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
            navigate('/placeorder')
        }
    
  return (
    <FormContainer><h1>Select Payment Method</h1>
    <CheckoutSteps step1 step2 step3/>
    <Form onSubmit={submitHandler}>
    <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Upi or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>
      <Button type='submit' variant='primary'>
        Continue
      </Button>
    </Form>
    </FormContainer>
  )
}

export default PaymentScreen