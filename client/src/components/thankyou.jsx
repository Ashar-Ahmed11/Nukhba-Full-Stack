import React from 'react'
import { Link } from 'react-router-dom'
export default function ThankYou() {
    const color = "#F4B92D"
  
    window.scrollTo(0,0)
    return (
        <div>
            <div style={{ color: color, fontFamily: 'Sagrantino' }} className="py-5 my-5 d-flex justify-content-center flex-column">
                <div className="py-5 my-5">
                    <h1 className="text-center">Thank You!</h1>
                    <h3 className="text-center">Your Order has been placed successfully</h3>
                    <div className="d-flex justify-content-center">
                        <Link to="/"><button style={{ border: '1px solid #F4B92D', backgroundColor: 'black', color: color, fontFamily: 'Twentieth Century' }} className="btn">Continue Shopping</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}