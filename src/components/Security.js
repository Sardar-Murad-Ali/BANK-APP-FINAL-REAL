import React from 'react'
import "./Security.css"
import {card,bill} from "../assets/index"

const Security = () => {
  return (
    <div className='security__Main section__padding' id='security'>
        <div className='security__Wrapper1'>
           <h1 className='h__Cormorant'>
             You do the businesss we`ll handle the money
           </h1>

           <p className='p__Sans'>
           With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
           </p>

           <button className='custom__Btn'>Get Started</button>

        <img src={card}/>
        </div>

        <div className='security__Wrapper2 '>
          <img src={bill}/>
        </div>

    </div>
  )
}

export default Security