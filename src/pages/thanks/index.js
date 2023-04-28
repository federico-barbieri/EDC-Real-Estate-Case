import React from 'react';
import thanks from "./index.module.css"

function ThankYou() {
  return (
    <>
    <div className={thanks.thankYou}>
    <h2>Thank you!</h2>
    <p>We have received your information.</p>

    <button className={thanks.btn}>TAKE ME TO DASHBOARD</button>
    </div>
    </>
  )
}

export default ThankYou