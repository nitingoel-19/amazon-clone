import React from 'react'
import Header from './Header'
import { Elements } from '@stripe/react-stripe-js'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);
const PaymentDoing = () => {
  return (
    <div>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </div>
  )
}

export default PaymentDoing;
